import React from 'react';
import { play } from '../../assets';
import './recently.scss';

const Recently = ({ song, handlePlay }: any) => {
  console.log('recently', song);
  return (
    <div className="recently" style={{ cursor: 'pointer' }} onClick={handlePlay}>
      <img src={song.albumUrl} alt={song.title} style={{ height: '40px', width: '40px' }} className="recently__img" />
      <div className="recently__info">
        <div>{song.title}</div>
        <div className="text-muted">{song.artist}</div>
      </div>
    </div>
  );
};

export default Recently;
