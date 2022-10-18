import React from "react";

export default function IndividualSong({ song }) {
  return (
    <div className="song-container">
      <div className="song-image-container">
        <img src={song.imageUrl} />
      </div>
    </div>
  );
}
