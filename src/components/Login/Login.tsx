import React from 'react';
import { spotifyBg, icon } from '../../assets';
import './login.scss';

const Login = () => {
  // To run in gh-pages
  const CLIENT_ID = '90bff2091ffe456d8f39bb64533e91d0';
  const REDIRECT_URI = 'http://localhost:3000/dashboard';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  
  // For run in local
  // const REDIRECT_URI = 'http://localhost:3000/dashboard';

  return (
    <div className="App login-view" style={{ backgroundImage: `url(${spotifyBg})` }}>
      <div className="app-header">
        <a
          className="btn"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20playlist-read-private%20playlist-modify-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`}
        >
          <img className="icon" src={icon} alt="Icono" />
          Login to Spotify
        </a>
      </div>
    </div>
  );
};

export default Login;

//   <div>
//     {token && (
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <Dashboard token={token} />
//         <button className="btn-logout" onClick={logout}>
//           Logout
//         </button>
//         <button className="btn-logout" onClick={getHistorial}>
//           Get historial
//         </button>
//       </div>
