import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as playlistActions from "../../store/playlists";
import AddPlaylistForm from "./AddPlaylistForm";
import PlaylistFormModal from "./PlayListModal";
import AudioPlayer from "react-h5-audio-player";
import { Playlist } from "./Playlist";
import "./Playlists.css";

export default function Playlists() {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);
  const keyArr = Object.keys(playlists);

  useEffect(() => {
    dispatch(playlistActions.getAllPlaylists());
  }, [dispatch]);

  if (!playlists) {
    return <h1>PLAYLISTS DO NOT EXIST </h1>;
  }
  return (
    <div>
      <div className="songs-container">
        <div className="header">
          <h1 className="playlist-title">Explore Playlists</h1>
          <PlaylistFormModal type="new" />
        </div>
        <ul>
          {keyArr.map((playlistId) => {
            return (
              <>
                <Playlist playlists={playlists} playlistid={playlistId} />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
