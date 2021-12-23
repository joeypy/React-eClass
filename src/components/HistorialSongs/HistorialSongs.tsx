import React from 'react';
import Recently from '../Recently/Recently';
import './historial-song.scss';

const HistorialSongs = () => {
  let songs = [
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
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
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
    {
      artist: 'Avril lavigne',
      title: 'my happy ending',
      uri: 'http',
      albumUrl: 'img',
    },
  ];

  const handlePlay = () => {};

  return (
    <div className="history">
      <h3>Recently played</h3>
      <ul>
        {songs.map((song, index) => (
          <>
            {index > 0 ? <hr style={{ width: '90%' }} /> : undefined}
            <li key={song.uri}>
              <Recently song={song} handlePlay={handlePlay} />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default HistorialSongs;
