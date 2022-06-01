// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPlaylistForm from './AddPlaylistForm';
import EditPlaylistForm from './EditPlaylistForm';


function PlaylistFormModal({type, value}) {
  const [showModal, setShowModal] = useState(false);

  if (type === 'new') {

  return (
    <>
      <button className="playlist-modal-button" onClick={() => setShowModal(true)}>+ A PLAYLIST</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddPlaylistForm closeModal={()=>{setShowModal(!showModal)}}/>
        </Modal>
      )}
    </>
  );
} else {
    return (
        <>
          <button className="playlist-modal-button" playlistId={value} onClick={() => setShowModal(true)}>EDIT PLAYLIST</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditPlaylistForm playlistId={value} closeModal={()=>{setShowModal(!showModal)}}/>
            </Modal>
          )}
        </>
      );

}
}

export default PlaylistFormModal;