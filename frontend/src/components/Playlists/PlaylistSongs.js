import React from "react";

export default function PlaylistSongs({ playlistId }) {
  const playlistSongs = [];

  return (
    <ul className="songs-in-playlist" id={playlistId}>
      {playlistSongs.map((song, i) => {
        return (
          <li className="song-in-playlist" key={i}>
            {song.name}
          </li>
        );
      })}
    </ul>
  );
}
