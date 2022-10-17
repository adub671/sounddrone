import "./SongTiles.css";
import React, { useContext } from "react";
import { AudioContext } from "../../context/Audio";

export default function SongTile({ song }) {
  const { setAudioUrl } = useContext(AudioContext);
  return (
    <div
      className="song-tile"
      onClick={() => {
        setAudioUrl(song.audioUrl);
      }}
    >
      <img
        src={song.imgUrl}
        alt={`${song.title} cover`}
        className="song-tile-image"
      />
      <div className="song-tile-name">{song.name}</div>
      <div className="play-button">
        <div className="play-pause"></div>
      </div>
    </div>
  );
}
