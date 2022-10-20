import React, { useContext, useEffect } from "react";
import { AudioContext } from "../../context/Audio";
import AudioPlayer from "react-h5-audio-player";
import "./AudioPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

export default function AppAudioPlayer() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.session.allUsers);
  const { currentSong, player, songQueue, setSongQueue, setSong } =
    useContext(AudioContext);

  const onSongEnd = () => {
    setSong(songQueue[0]);
    const newQueue = [...songQueue];
    newQueue.shift();
    setSongQueue(newQueue);
  };

  const deleteFromQueue = (song) => {
    const songInPlaylistIndex = songQueue.indexOf(song);
    const newQueue = [...songQueue];
    newQueue.splice(songInPlaylistIndex, 1);
    setSongQueue(newQueue);
  };

  useEffect(() => {
    dispatch(sessionActions.userList());
  }, [dispatch]);
  return (
    <div className="fixed-audio-container">
      {songQueue.length === 0 ? null : (
        <div className="queue-container">
          <h1 className="next-up">NEXT UP: {songQueue[0]?.name} </h1>
          <ul className="next-songs-container">
            {songQueue.map((song, i) => {
              return (
                <li key={i} className="next-songs">
                  <div>
                    {song?.name}{" "}
                    <img
                      className="queue-x-icon"
                      onClick={() => {
                        deleteFromQueue(song);
                      }}
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="app-audio-player-container">
        <div className="audio-player">
          <AudioPlayer
            autoPlay
            src={currentSong.audioUrl}
            onPlay={() => {
              console.log(currentSong.name, "is playing");
            }}
            onEnded={onSongEnd}
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
    </div>
  );
}
