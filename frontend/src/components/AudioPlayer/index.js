import React, { useContext } from "react";
import { AudioContext } from "../../context/Audio";
import AudioPlayer from "react-h5-audio-player";
import "./AudioPlayer.css";

export default function AppAudioPlayer() {
  const { song } = useContext(AudioContext);
  return (
    <div className="app-audio-player-container home-audio-player">
      <div className="audio-player">
        <AudioPlayer
          src={song.audioUrl}
          onPlay={() => {
            console.log(song.name, "is playing");
          }}
        />
      </div>
      <div className="now-playing-container">Now Playing: {song.name}</div>
    </div>
  );
}
