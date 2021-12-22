import React, { useEffect, useState } from "react";
import "./App.scss";
import { spotifyBg } from "./assets";
import Dashboard from "./components/Dashboard";

function App() {
  const CLIENT_ID = "99ab8f9cc8604280bcf6069521fd7810";
  const REDIRECT_URI = "https://joeypy.github.io/React-eClass/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

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

  return (
    <div
      className="App login-view"
      style={{ backgroundImage: `url(${spotifyBg})` }}
    >
      <div className="app-header">
        {!token && (
           <a
            className="btn"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
