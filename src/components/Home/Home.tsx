import React from 'react';
import { icon } from '../../assets';
import HistorialSong from '../HistorialSongs/HistorialSongs';
import ListSongs from '../ListSongs/ListSongs';
import Player from '../Player/Player';
import SearchInput from '../SearchInput/SearchInput';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="header__logo">
          <img src={icon} alt="Icon" className="header__logo-icon" />
          <span>Spotify</span>
        </div>
        <div className="header__search">
          <SearchInput />
        </div>
      </header>

      <main className="main">
        <div className="main__historial">
          <HistorialSong />
        </div>
        <div className="main__list-songs">
          <ListSongs />
          <Player />
        </div>
      </main>
    </div>
  );
};

export default Home;
