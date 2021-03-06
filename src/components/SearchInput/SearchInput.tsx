import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../features/authentication/authSlice';
import { setSongs } from '../../features/songs/songSlice';
import './search-input.scss';

const SearchInput = ({ handleLogout }: any) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // store
  const { token, id_client } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  // Instance to make API request in spotify
  const spotifyApi = new SpotifyWebApi({
    clientId: id_client,
  });

  // Make a request to the API to get the historial recently play
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!token) return;

    spotifyApi.setAccessToken(token);
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
        console.log('Authentication error', error);
        handleLogout();
      });
  }, [search, token]);

  // Update the list of songs went the search is updated
  useEffect(() => {
    dispatch(setSongs(searchResults));
  }, [searchResults]);

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Songs/Artists/Album"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchInput;
