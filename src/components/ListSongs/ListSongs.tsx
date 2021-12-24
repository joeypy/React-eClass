import React from 'react';
import { play } from '../../assets';
import Player from '../Player/Player';
import './list-song.scss';
import { selectSong } from '../../features/songs/songSlice';
import { useAppSelector } from '../../app/hooks';

const ListSongs = () => {
  const songs = useAppSelector(selectSong);

  console.log('show songs', songs.list_songs);

  const handlePlay = () => {};

  return (
    <div className="song-container" id="style-1">
      {songs.list_songs.map((song) => (
        // <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
        <div key={song.uri} className="song" style={{ cursor: 'pointer' }} onClick={handlePlay}>
          <img src={song.albumUrl} alt={song.title} style={{ height: '84px', width: '84px' }} className="song__img" />
          <div className="song__info">
            <div>{song.title}</div>
            <div className="text-muted">{song.artist}</div>
          </div>
          <div className="song__button">
            <img src={play} alt="Play button" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSongs;
