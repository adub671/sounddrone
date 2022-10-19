import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AudioContext } from "../../context/Audio";
import SongFormModal from "./SongModal";
import "./IndividualSong.css";
import * as sessionActions from "../../store/session";
import * as songActions from "../../store/songs";
import * as playlistActions from "../../store/playlists";

const playIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1663887398/songplay_tb28tn.png";
const pauseIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1665680954/Eo_circle_deep-orange_pause.svg_zancav.png";

export default function IndividualSong({ song, key }) {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.session.allUsers);
  const [isPlayOrPause, setPlayOrPause] = useState("play");
  const { setSong, currentSong, player, songQueue, setSongQueue } =
    useContext(AudioContext);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.userList());
  }, [dispatch]);

  const handlePlay = (song) => {
    setSong(song);
    setPlayOrPause("pause");
    if (song.name === currentSong.name) {
      if (isPlayOrPause === "pause") {
        setPlayOrPause("play");
        player.current.audio.current.pause();
      }
      if (isPlayOrPause === "play") {
        setPlayOrPause("pause");
        player.current.audio.current.play();
      }
    }
  };

  const handleDelete = (song) => {
    if (user?.id === song?.userId) {
      const songId = song.id;
      console.log(song, songId, "songId");
      dispatch(playlistActions.deleteSongFromAllPlaylists(songId));
      dispatch(songActions.deleteSong(songId));
    }
  };

  const handleCopyLink = (song) => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(song.id);

    // Alert the copied text
    alert("Copied the text: " + song.id);
  };

  const addToQueue = (song) => {
    if (songQueue.includes(song)) {
      alert("The Track Queue already includes" + song.name);
    } else {
      const newQueue = songQueue;
      newQueue.push(song);
      setSongQueue(newQueue);
    }
  };

  return (
    <div className="song-container" key={key}>
      <div className="song-image-container">
        <img src={song?.imgUrl} />
      </div>
      <div className="song-info-container">
        <div className="play-pause-button">
          <img
            src={
              song.name !== currentSong.name
                ? playIconUrl
                : isPlayOrPause === "play"
                ? playIconUrl
                : pauseIconUrl
            }
            onClick={() => {
              handlePlay(song);
            }}
          />
        </div>
        <div className="song-info">
          <div className="song-artist-name">
            {allUsers[song?.userId - 1].username}
          </div>
          <div className="song-name">{song?.name}</div>
        </div>
        <div className="song-action-buttons">
          {user?.id === song.userId ? (
            <>
              <button
                className="delete-song"
                onClick={() => {
                  handleDelete(song);
                }}
              >
                {" "}
                DELETE
              </button>
              <SongFormModal type={"edit"} songId={song?.id} song={song} />
            </>
          ) : null}
          <SongFormModal type={"addToPlaylist"} songId={song?.id} />
          <button
            className="share"
            onClick={() => {
              handleCopyLink(song);
            }}
          >
            COPY LINK
          </button>
          <button
            className="add-to-queue"
            onClick={() => {
              addToQueue(song);
            }}
          >
            ADD TO SONG QUEUE
          </button>
        </div>
      </div>
    </div>
  );
}
