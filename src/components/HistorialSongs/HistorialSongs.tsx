import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../features/authentication/authSlice';
import { selectSong, setHistorial } from '../../features/songs/songSlice';
import Recently from '../Recently/Recently';
import './historial-song.scss';

const HistorialSongs = () => {
  const { token, id_client } = useAppSelector(selectAuth);
  const songs = useAppSelector(selectSong);
  const dispatch = useAppDispatch();

  const spotifyApi = new SpotifyWebApi({
    clientId: id_client,
  });

  useEffect(() => {
    spotifyApi.setAccessToken(token);
    console.log('historial token', token);
    spotifyApi
      .getMyRecentlyPlayedTracks({
        limit: 20,
      })
      .then((data: any) => {
        // Output items
        console.log('Your 20 most recently played tracks are:');
        let historialData = data.body.items.map((item: any) => {
          const smallestAlbumImage = item.track.album.images.reduce((smallest: any, image: any) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, item.track.album.images[0]);

          return {
            artist: item.track.artists[0].name,
            title: item.track.name,
            uri: item.track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        });
        dispatch(setHistorial(historialData));
        console.log(historialData);
        // console.log('hola');
      })
      .catch((error: any) => {
        console.log('Something went wrong!', error);
      });
  }, [token]);

  const handlePlay = () => {};

  return (
    <div className="history">
      <h3>Recently played</h3>
      <div className="content" id="style-1">
        <ul>
          {songs.historial.map((song, index) => (
            <>
              {index > 0 ? <hr style={{ width: '90%' }} /> : undefined}
              <li key={song.uri}>
                <Recently song={song} handlePlay={handlePlay} />
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistorialSongs;
