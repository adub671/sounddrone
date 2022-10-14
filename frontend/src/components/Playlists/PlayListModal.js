// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import AddPlaylistForm from "./AddPlaylistForm";
import EditPlaylistForm from "./EditPlaylistForm";

function PlaylistFormModal({ type, value }) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.session.user);

  if (type === "new") {
    return (
      <>
        <button
          className="playlist-button"
          id="upload"
          onClick={() => setShowModal(true)}
        >
          ADD A PLAYLIST
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {!user ? (
              <LoginForm title="Login To Add A Playlist" />
            ) : (
              <AddPlaylistForm
                closeModal={() => {
                  setShowModal(!showModal);
                }}
              />
            )}
          </Modal>
        )}
      </>
    );
  } else {
    return (
      <>
        <button
          className="playlist-button"
          playlistId={value}
          onClick={() => setShowModal(true)}
        >
          EDIT PLAYLIST
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditPlaylistForm
              playlistId={value}
              closeModal={() => {
                setShowModal(!showModal);
              }}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default PlaylistFormModal;
