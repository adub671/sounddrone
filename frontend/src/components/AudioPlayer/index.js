import React, { useContext } from "react";
import { AudioContext } from "../../context/Audio";
import AudioPlayer from "react-h5-audio-player";

export default function AppAudioPlayer() {
  const { song } = useContext(AudioContext);
  return (
    <div className="app-audio-player home-audio-player">
      <AudioPlayer
        src={song.audioUrl}
        onPlay={() => {
          console.log(song.title, "is playing");
        }}
      />
    </div>
  );
}
