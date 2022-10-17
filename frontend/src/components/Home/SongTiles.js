import "./SongTiles.css";
import React, { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../context/Audio";

const playIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1663887398/songplay_tb28tn.png";
const pauseIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1665680954/Eo_circle_deep-orange_pause.svg_zancav.png";

export default function SongTile({ song }) {
  const { currentSong, setSong, player } = useContext(AudioContext);
  const [isPlaying, setIsPlaying] = useState(currentSong === song);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    console.log(currentSong.name, song.name);
    console.log(currentSong.name === song.name, "songEquality");
    if (currentSong === song) {
      setIsPlaying(true);
    }
    if (currentSong !== song) {
      setIsPlaying(false);
    }
  }, [currentSong, isPlaying, player]);
  return (
    <div className="song-tile-overlay">
      <div
        className="song-tile"
        onClick={() => {
          setSong(song);
          setIsPlaying(true);
          if (isPlaying) {
            setIsPlaying(false);
            if (isPaused) {
              player.current.audio.current.play();
              setIsPaused(false);
            } else {
              player.current.audio.current.pause();
              setIsPaused(true);
            }
          }
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
          src={isPlaying && !isPaused ? pauseIconUrl : playIconUrl}
        />
      </div>
    </div>
  );
}
