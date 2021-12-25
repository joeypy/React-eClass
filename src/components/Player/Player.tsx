import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useAppSelector } from '../../app/hooks';
import { selectSong } from '../../features/songs/songSlice';
import './player.scss';

const Player = ({ accessToken }: any) => {
  const [play, setPlay] = useState(false);
  const songs = useAppSelector(selectSong);

  useEffect(() => setPlay(true), [songs]);

  // if (!accessToken) return null;
  return (
    <div className="player">
      {songs.play_song && (
        <SpotifyPlayer
          token={accessToken}
          showSaveIcon
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
          }}
          play={play}
          uris={songs.play_song.uri ? [songs.play_song.uri] : []}
          styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
        />
      )}
    </div>
  );
};

export default Player;
