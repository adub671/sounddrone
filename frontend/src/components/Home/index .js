import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

import LoginFormModal from "../LoginFormModal";
import SongTile from "./SongTiles";
import * as songActions from "../../store/songs";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs);
  const songsArr = Object.values(songs);
  const slicedSongsArr = songsArr.slice(0, 18);

  useEffect(() => {
    dispatch(songActions.getAllSongs());
  }, [dispatch]);

  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="home-banner">
            <h2 className="banner-title">
              Welcome to <span className="sounddrone">soundDRONE</span>.{" "}
              <div>A place to find music.</div>
            </h2>

            {!user ? (
              <div className="user-buttons-logged-out">
                <LoginFormModal className="banner-login" />
                <Link to="/signup">SIGN UP</Link>
              </div>
            ) : (
              <div className="user-buttons-logged-in">
                <Link to="/songs">Discover Tracks</Link>{" "}
                <Link to="/playlists">Discover Playlists</Link>
              </div>
            )}
          </div>
          <div className="home-song-tiles">
            {songs ? (
              slicedSongsArr.map((song, idx) => {
                return <SongTile key={idx} song={song} />;
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        {/* <div className="home-audio-player">
          <AudioPlayer src={audioUrl} />
        </div> */}
      </div>
    </>
  );
}
