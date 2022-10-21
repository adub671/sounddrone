import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as playlistActions from "../../store/playlists";
import PlaylistFormModal from "./PlayListModal";
import { Playlist } from "./Playlist";
import "./Playlists.css";
// import IndividualPlaylist from "./IndividualPlaylist";

export default function Playlists() {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);
  const keyArr = Object.keys(playlists);
  console.log(playlists["1"], "playlist 0");

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
      <div className="page-bottom-spacer"></div>
    </div>
  );
}
