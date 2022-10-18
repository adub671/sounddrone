import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as songActions from "../../store/songs";
import * as playlistActions from "../../store/playlists";

import SongFormModal from "./SongModal";
import "./Songs.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Songs() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const user = useSelector((state) => state.session.user);
  const keyArr = Object.keys(songs);

  const handleDelete = (e) => {
    const songId = e.target.value;
    dispatch(playlistActions.deleteSongFromAllPlaylists(songId));
    dispatch(songActions.deleteSong(songId));
  };

  useEffect(() => {
    dispatch(songActions.getAllSongs());
  }, [dispatch]);

  if (!songs) {
    return <h1>SONGS NOT FOUND / NO SONGS EXIST</h1>;
  }
  return (
    <div className="page-container">
      <div className="songs-container">
        <div className="header">
          <h1>Discover Tracks</h1>
          <SongFormModal type="new" />
        </div>
        <ul>
          {keyArr.map((songId, i) => {
            return (
              <div key={i} className="song-container">
                <li key={songId} className="song-list">
                  <div className="song">
                    <img
                      src={songs[songId].imgUrl}
                      alt={songs[songId]?.name}
                      className="song-image"
                    ></img>
                    <div className="name-and-player-container">
                      <span className="song-name">{songs[songId]?.name}</span>
                      <div className="audio-player-container">
                        <AudioPlayer src={songs[songId]?.audioUrl} />
                      </div>
                    </div>
                  </div>
                  <div className="user-song-buttons">
                    {user && user.id === songs[songId].userId ? (
                      <>
                        <SongFormModal
                          value={songId}
                          className="edit-button"
                          type="edit"
                        />
                        <button
                          value={songId}
                          onClick={handleDelete}
                          className="song-modal-button"
                        >
                          DELETE SONG
                        </button>
                      </>
                    ) : null}
                    <SongFormModal
                      value={songId}
                      className="edit-button"
                      type="addToPlaylist"
                    />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
        <div className="page-bottom-spacer"></div>
      </div>
    </div>
  );
}
