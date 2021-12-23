import React from 'react';
import { play } from '../../assets';
import Player from '../Player/Player';
import './list-song.scss';

const ListSongs = () => {
  let songs = [
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'My world',
      uri: 'http',
      albumUrl: 'img',
    },
  ];

  const handlePlay = () => {};

  return (
    <div className="song-container">
      {songs.map((song) => (
        <div className="song" style={{ cursor: 'pointer' }} onClick={handlePlay}>
          <img
            src={
              'data:image/jpeg;base64,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'
            }
            alt={song.title}
            style={{ height: '84px', width: '84px' }}
            className="song__img"
          />
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
