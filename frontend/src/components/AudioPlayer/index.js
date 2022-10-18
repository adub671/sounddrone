import React, { useContext, useEffect } from "react";
import { AudioContext } from "../../context/Audio";
import AudioPlayer from "react-h5-audio-player";
import "./AudioPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

export default function AppAudioPlayer() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.session.allUsers);
  console.log(allUsers, "all users");

  useEffect(() => {
    dispatch(sessionActions.userList());
  }, [dispatch]);
  const { currentSong, player } = useContext(AudioContext);
  return (
    <div className="app-audio-player-container home-audio-player">
      <div className="audio-player">
        <AudioPlayer
          src={currentSong.audioUrl}
          onPlay={() => {
            console.log(currentSong.name, "is playing");
          }}
          ref={player}
        />
      </div>
      <div className="now-playing-container">
        {Object.keys(currentSong).length !== 0 ? (
          <>
            <div className="now-playing-image-container">
              {currentSong.imgUrl ? (
                <img
                  src={currentSong.imgUrl}
                  alt="now playing image"
                  className="now-playing-image"
                />
              ) : null}
            </div>
            <div className="now-playing-title">
              <span>{allUsers[currentSong.userId - 1].username}</span>
              <span>{currentSong.name}</span>
            </div>
          </>
        ) : (
          <div className="now-playing-placeholder">
            <span>Select A Song To Play</span>
            <br />
            <span className="sounddrone-audioplayer">SOUNDDRONE</span>
          </div>
        )}
      </div>
    </div>
  );
}
