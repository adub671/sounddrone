import React, { useContext } from "react";
import { AudioContext } from "../../context/Audio";
import AudioPlayer from "react-h5-audio-player";
import "./AudioPlayer.css";

export default function AppAudioPlayer() {
  const { currentSong, player } = useContext(AudioContext);
  return (
    <div className="app-audio-player-container home-audio-player">
      <div className="audio-player">
        <AudioPlayer
          src={currentSong.audioUrl}
          onPlay={() => {
            console.log(currentSong.name, "is playing");
          }}
          ref={player}
        />
      </div>
      <div className="now-playing-container">
        Now Playing: {currentSong.name}
      </div>
    </div>
  );
}
