import React, { useEffect, useState } from "react";
import "./App.scss";
import { spotifyBg } from "./assets";
import Dashboard from "./components/Dashboard";

function App() {
  const CLIENT_ID = "90bff2091ffe456d8f39bb64533e91d0";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&

  const [token, setToken] = useState("");

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    console.log(token);
  }, []);

  const showState = () => {
    console.log(token);
  };

  const getHistorial = () => {};

  return (
    <div
      className="App login-view"
      style={{ backgroundImage: `url(${spotifyBg})` }}
    >
      <div className="app-header">
        {!token && (
          <a
            className="btn"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`}
          >
            Login to Spotify
          </a>
        )}
      </div>
      <div>
        {token && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Dashboard token={token} />
            <button className="btn-logout" onClick={logout}>
              Logout
            </button>
            <button className="btn-logout" onClick={getHistorial}>
              Get historial
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
