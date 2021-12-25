import React from 'react';
import { empty, play } from '../../assets';
import './list-song.scss';
import { selectSong, Songs, setPlay } from '../../features/songs/songSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const ListSongs = () => {
  const songs = useAppSelector(selectSong);
  const dispatch = useAppDispatch();

  // set the song to play in the global state
  const handlePlay = (song: Songs) => {
    dispatch(setPlay(song));
  };

  return (
    <div className={songs.list_songs.length < 1 ? 'song-container flex' : 'song-container'} id="style-1">
      {songs.list_songs.length < 1 ? (
        <div className="no-songs">
          <img src={empty} alt="Music logo" className="empty-list" style={{ height: '84px', width: '84px' }} />
          <h1>Search a song and get start listening!</h1>
        </div>
      ) : (
        songs.list_songs.map((song) => (
          // <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
          <div key={song.uri} className="song" style={{ cursor: 'pointer' }} onClick={() => handlePlay(song)}>
            <img src={song.albumUrl} alt={song.title} style={{ height: '84px', width: '84px' }} className="song__img" />
            <div className="song__info">
              <div>{song.title}</div>
              <div className="text-muted">{song.artist}</div>
            </div>
            <div className="song__button">
              <img src={play} alt="Play button" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListSongs;
