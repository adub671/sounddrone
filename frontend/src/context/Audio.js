import React, { createContext, useState, useRef } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [audioUrl, setAudioUrl] = useState("");
  const [currentSong, setSong] = useState({});
  const [songQueue, setSongQueue] = useState([]);
  const [playing, setPlaying] = useState(false);
  const player = useRef();

  return (
    <>
      <AudioContext.Provider
        value={{
          audioUrl,
          setAudioUrl,
          currentSong,
          setSong,
          player,
          songQueue,
          setSongQueue,
          playing,
          setPlaying,
        }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
}
