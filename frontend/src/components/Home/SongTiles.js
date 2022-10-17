import "./SongTiles.css";
import React, { useContext, useState } from "react";
import { AudioContext } from "../../context/Audio";

const playIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1663887398/songplay_tb28tn.png";
const pauseIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1665680954/Eo_circle_deep-orange_pause.svg_zancav.png";

export default function SongTile({ song }) {
  const [isPlaying] = useState("false");
  const { setSong } = useContext(AudioContext);
  return (
    <div className="song-tile-overlay">
      <div
        className="song-tile"
        onClick={() => {
          setSong(song);
        }}
      >
        <div className="song-image-overlay">
          <img
            src={song.imgUrl}
            alt={`${song.title} cover`}
            className="song-tile-image"
          />
        </div>
        <div className="song-tile-name">{song.name}</div>
        <img
          className="play-pause"
          src={!isPlaying ? pauseIconUrl : playIconUrl}
        />
      </div>
    </div>
  );
}
