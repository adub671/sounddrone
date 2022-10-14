import "./SongTiles.css";
import React from "react";

export default function SongTile({ song, setAudioUrl }) {
  return (
    <div
      className="song-tile"
      onClick={() => {
        setAudioUrl();
      }}
    >
      <img
        src={song.imgUrl}
        alt={`${song.title} cover`}
        className="song-tile-image"
      />
      <div className="song-tile-name">{song.name}</div>
    </div>
  );
}
