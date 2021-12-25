import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { icon } from '../../assets';
import { selectAuth } from '../../features/authentication/authSlice';
import HistorialSong from '../HistorialSongs/HistorialSongs';
import ListSongs from '../ListSongs/ListSongs';
import Player from '../Player/Player';
import SearchInput from '../SearchInput/SearchInput';
import { set, clear } from '../../features/authentication/authSlice';
import './dashboard.scss';

const Dashboard = () => {
  const { token, id_client } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const [playingTrack, setPlayingTrack] = useState({
    uri: '',
  });

  const spotifyApi = new SpotifyWebApi({
    clientId: id_client,
  });

  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    dispatch(set(token));
    console.log('dashboard', token);

    if (!token) {
      navigate('/');
    }
  }, [token, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(clear());
    window.localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="home">
      <header className="header">
        <div className="header__logo">
          <img src={icon} alt="Icon" className="header__logo-icon" />
          <span>Spotify</span>
        </div>
        <div className="header__search">
          <SearchInput />
          <button className="btn btn--logout" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </header>

      <main className="main">
        <div className="main__historial">
          <HistorialSong />
        </div>
        <div className="main__list-songs">
          <ListSongs />
          <Player accessToken={token} trackUri={playingTrack.uri} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
