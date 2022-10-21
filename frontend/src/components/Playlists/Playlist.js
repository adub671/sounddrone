import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AudioContext } from "../../context/Audio";

import * as playlistActions from "../../store/playlists";

import PlaylistFormModal from "./PlayListModal";

const playIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1663887398/songplay_tb28tn.png";
const pauseIconUrl =
  "https://res.cloudinary.com/dy199z8qt/image/upload/v1665680954/Eo_circle_deep-orange_pause.svg_zancav.png";

export function Playlist({ playlistid }) {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);
  const user = useSelector((state) => state.session.user);
  const playlist = playlists[playlistid];
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);
  const [isPlayOrPause, setPlayOrPause] = useState("play");
  const { setSong, currentSong, player, songQueue, setSongQueue, playing } =
    useContext(AudioContext);

  useEffect(() => {
    dispatch(playlistActions.getAllPlaylists());
  }, [dispatch]);

  useEffect(() => {
    if (songQueue.includes(playlist.Songs[playlist.Songs.length - 1])) {
      setIsCurrentlyPlaying(true);
    }

    if (playlist.Songs.includes(currentSong)) {
      setIsCurrentlyPlaying(true);
    } else {
      setIsCurrentlyPlaying(false);
    }
  }, [songQueue, currentSong]);

  const handleDelete = (e) => {
    const playlistId = e.target.value;
    dispatch(playlistActions.clearPlaylist(playlistId));
    dispatch(playlistActions.deletePlaylist(playlistId));
  };

  const handlePlayPlaylist = (playlist) => {
    if (playlist.Songs.length) {
      const newQueue = [...playlist.Songs];
      const newSong = newQueue.shift();
      setSongQueue(newQueue);
      setSong(newSong);
      if (isPlayOrPause === "play") {
        setPlayOrPause("pause");
        player.current.audio.current.play();
      } else {
        setPlayOrPause("play");
        player.current.audio.current.pause();
      }
    } else {
      alert("There are no tracks in this playlist");
    }
  };

  const addPlaylistToQueue = (playlist) => {
    const newQueue = [...songQueue];
    newQueue.push(...playlist.Songs);
    setSongQueue(newQueue);
  };

  return (
    <>
      <div className="playlist-container">
        <li key={playlistid}>
          <div className="playlist-left-container">
            <img
              src={playlist.imageUrl}
              alt={playlist.name}
              className="playlist-image"
            ></img>
          </div>
          <div className="playlist-right-container">
            {/* <AudioPlayer src={audioUrl} autoPlayAfterSrcChange={false} /> */}
            <div className="playlist-name">
              <div className="play-button-container">
                <img
                  src={
                    // isPlayOrPause === "play" ? playIconUrl : pauseIconUrl
                    isPlayOrPause === "pause" && isCurrentlyPlaying
                      ? pauseIconUrl
                      : playIconUrl
                  }
                  onClick={() => {
                    handlePlayPlaylist(playlist);
                  }}
                />
              </div>
              <span className="playlist-name-text"> {playlist.name}</span>
            </div>
            <div className="playlist-songs-container">
              <ul>
                {playlist.Songs?.map((song, idx) => {
                  return (
                    <li
                      className="playlist-song"
                      id={idx}
                      songid={song.id}
                      key={idx}
                      onClick={() => {
                        setSong(song);
                      }}
                    >
                      <div
                        className="playlist-song-container"
                        id={idx}
                        url={song.audioUrl}
                        name={song.name}
                      >
                        <img
                          src={song.imgUrl}
                          alt={`${song.title} cover`}
                          className="tiny-image"
                        ></img>
                        {song.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="user-playlist-buttons">
              {user && user.id === playlist.userId ? (
                <>
                  <PlaylistFormModal
                    value={playlistid}
                    id="playlist-edit-button"
                    className="user-playlist-button"
                  />
                  <button
                    value={playlistid}
                    onClick={handleDelete}
                    className="user-playlist-button"
                    id="playlist-delete-button"
                  >
                    DELETE PLAYLIST
                  </button>
                </>
              ) : null}
              <button
                onClick={() => {
                  addPlaylistToQueue(playlist);
                }}
              >
                ADD TO SONG QUEUE
              </button>
            </div>
          </div>
          <div> </div>
        </li>
      </div>
    </>
  );
}
