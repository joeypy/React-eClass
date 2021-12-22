import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, trackUri }: any) => {
  if (!accessToken) return null;

  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
};

export default Player;
