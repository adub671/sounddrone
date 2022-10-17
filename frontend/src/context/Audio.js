import React, { createContext, useState, useRef } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [audioUrl, setAudioUrl] = useState("");
  const [currentSong, setSong] = useState({});
  const player = useRef();

  return (
    <>
      <AudioContext.Provider
        value={{ audioUrl, setAudioUrl, currentSong, setSong, player }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
}
