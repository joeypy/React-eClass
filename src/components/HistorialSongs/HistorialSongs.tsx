import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { empty } from '../../assets';
import { selectAuth } from '../../features/authentication/authSlice';
import { selectSong, setHistorial, setPlay, Songs } from '../../features/songs/songSlice';
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
    spotifyApi
      .getMyRecentlyPlayedTracks({
        limit: 20,
      })
      .then((data: any) => {
        // Output items
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
      })
      .catch((error: any) => {
        console.log('Something went wrong!', error);
      });
  }, [token, songs.play_song]);

  const handlePlay = (song: Songs) => {
    dispatch(setPlay(song));
  };

  return (
    <div className="history">
      <h3>Recently played</h3>
      {songs.historial.length < 1 ? (
        <div className="no-songs">
          <img src={empty} alt="Music logo" className="empty-list" style={{ height: '84px', width: '84px' }} />
          <h3>You still have no track record!</h3>
        </div>
      ) : (
        <div className="content" id="style-1">
          <ul>
            {songs.historial.map((song, index) => (
              <div key={song.uri + song.title + index}>
                {index > 0 ? <hr style={{ width: '90%' }} /> : undefined}
                <li>
                  <Recently song={song} handlePlay={() => handlePlay(song)} />
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HistorialSongs;
