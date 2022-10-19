import React, { useContext, useState } from "react";
import { AudioContext } from "../../context/Audio";
import "./IndividualSong.css";

const playIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1663887398/songplay_tb28tn.png";
const pauseIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1665680954/Eo_circle_deep-orange_pause.svg_zancav.png";

export default function IndividualSong({ song, key }) {
  const [isPlayOrPause] = useState("play");
  const { setSong } = useContext(AudioContext);

  const handlePlay = (audioUrl) => {
    console.log("play", audioUrl);
    setSong(audioUrl);
  };
  return (
    <div className="song-container" key={key}>
      <div className="song-image-container">
        <img src={song?.imgUrl} />
      </div>
      <div className="song-info-container">
        <div className="play-pause-button">
          <img
            src={isPlayOrPause === "play" ? playIconUrl : pauseIconUrl}
            onClick={() => {
              handlePlay(song?.audioUrl);
            }}
          />
        </div>
        <div className="song-info">
          <div className="song-artist-name">
            {song?.userId} THIS IS THE ARTISTS NAME
          </div>
          <div className="song-name">{song?.name}</div>
        </div>
        <div className="song-action-buttons">
          <button className="add-to-playlist">ADD TO PLAYLIST</button>
          <button className="delete-song">DELETE</button>
          <button className="share">COPY LINK</button>
          <button className="edit">EDIT</button>
        </div>
      </div>
    </div>
  );
}
