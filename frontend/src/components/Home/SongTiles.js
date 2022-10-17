import "./SongTiles.css";
import React, { useContext } from "react";
import { AudioContext } from "../../context/Audio";

export default function SongTile({ song }) {
  const { setSong } = useContext(AudioContext);
  return (
    <div
      className="song-tile"
      onClick={() => {
        setSong(song);
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
