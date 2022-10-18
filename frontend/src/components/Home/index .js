import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

import LoginFormModal from "../LoginFormModal";
import SongTile from "./SongTiles";
import * as songActions from "../../store/songs";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs);
  const songsArr = Object.values(songs);
  // const rando = shuffle(songsArr);
  // const slicedSongsArr = rando.slice(0, 18);

  const [randomArray, setRandomArray] = useState([]);

  useEffect(() => {
    if (songsArr.length) {
      setRandomArray(shuffle(songsArr).slice(0, 18));
    }
  }, [songs]);

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
              randomArray.map((song, idx) => {
                return <SongTile key={idx} song={song} />;
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
