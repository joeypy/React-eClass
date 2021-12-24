import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from './TrackSearchResult';
import Player from './Player/Player';

const spotifyApi = new SpotifyWebApi({
  clientId: '90bff2091ffe456d8f39bb64533e91d0',
});

const Dashboard = ({ token }: any) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({
    uri: '',
  });
  console.log(searchResults);

  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!token) return;

    let cancel = false;
    spotifyApi
      .searchTracks(search)
      .then((response: any) => {
        setSearchResults(
          response.body.tracks.items.map((track: any) => {
            const smallestAlbumImage = track.album.images.reduce((smallest: any, image: any) => {
              if (image.height < smallest.height) return image;
              return smallest;
            }, track.album.images[0]);

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            };
          })
        );
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [search, token]);

  return (
    <div className="d-flex flex-column py-2">
      <input
        type="search"
        placeholder="Search Songs/Artists/Album"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className="flex-grow-1 my-2"
        style={{
          overflowY: 'auto',
          maxHeight: '80vh',
          backgroundColor: 'white',
          minWidth: '1200px',
        }}
      >
        {searchResults.map((track) => (
          <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
      </div>

      <Player accessToken={token} trackUri={playingTrack.uri} />
    </div>
  );
};

export default Dashboard;
