import React, { createContext, useState } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [audioUrl, setAudioUrl] = useState("");

  return (
    <>
      <AudioContext.Provider value={{ audioUrl, setAudioUrl }}>
        {children}
      </AudioContext.Provider>
    </>
  );
}
