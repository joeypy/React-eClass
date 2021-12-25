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
import { setToken, clearAuth } from '../../features/authentication/authSlice';
import { setHistorial } from '../../features/songs/songSlice';
import './dashboard.scss';

const Dashboard = () => {
  const { token, id_client } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  // Get the access token from the url and set it in state
  // and check the localstore for token or historial
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    dispatch(setToken(token));
    dispatch(setHistorial(JSON.parse(localStorage.getItem('historial'))));

    // if the token doesn't exist, redirect to the login page
    if (!token) {
      navigate('/');
    }
  }, [token, dispatch, navigate]);

  // Logout function
  const handleLogout = () => {
    dispatch(clearAuth());
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
          <SearchInput handleLogout={handleLogout} />
          <button className="btn btn--logout" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </header>

      <main className="main">
        <div className="main__historial">
          <HistorialSong handleLogout={handleLogout} />
        </div>
        <div className="main__list-songs">
          <ListSongs />
          <Player accessToken={token} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
