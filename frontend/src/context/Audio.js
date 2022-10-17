import React, { createContext, useState } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [audioUrl, setAudioUrl] = useState("");
  const [song, setSong] = useState({});

  return (
    <>
      <AudioContext.Provider value={{ audioUrl, setAudioUrl, song, setSong }}>
        {children}
      </AudioContext.Provider>
    </>
  );
}
