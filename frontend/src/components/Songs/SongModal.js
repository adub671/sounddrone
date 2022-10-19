// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddSongForm from "./AddSongForm";
import EditSongForm from "./EditSongForm";
import AddToPlaylist from "./AddToPlaylist";

function SongFormModal({ type, songId, song }) {
  const [showModal, setShowModal] = useState(false);

  if (type === "new") {
    return (
      <>
        <button
          className="song-modal-button"
          onClick={() => setShowModal(true)}
        >
          + A SONG
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddSongForm
              closeModal={() => {
                setShowModal(!showModal);
              }}
            />
          </Modal>
        )}
      </>
    );
  }
  if (type === "edit") {
    return (
      <>
        <button
          className="edit-song"
          songId={songId}
          onClick={() => setShowModal(true)}
        >
          EDIT SONG
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditSongForm
              songId={songId}
              closeModal={() => {
                setShowModal(!showModal);
              }}
              song={song}
            />
          </Modal>
        )}
      </>
    );
  }

  if (type === "addToPlaylist") {
    return (
      <>
        <button
          className="add-to-playlist"
          songId={songId}
          onClick={() => setShowModal(true)}
        >
          ADD TO PLAYLIST
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddToPlaylist
              songId={songId}
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

export default SongFormModal;
