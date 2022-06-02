// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddSongForm from './AddSongForm';
import EditSongForm from './EditSongForm';
import AddToPlaylist from './AddToPlaylist';


function SongFormModal({type, value}) {
  const [showModal, setShowModal] = useState(false);

  if (type === 'new') {

  return (
    <>
      <button className="song-modal-button" onClick={() => setShowModal(true)} >+ A SONG</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddSongForm closeModal={()=>{setShowModal(!showModal)}}/>
        </Modal>
      )}
    </>
  );
} 
if (type === 'edit') {
    return (
        <>
          <button className="song-modal-button" songId={value} onClick={() => setShowModal(true)}>EDIT SONG</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditSongForm songId={value} closeModal={()=>{setShowModal(!showModal)}}/>
            </Modal>
          )}
        </>
      );

}

if (type === 'addToPlaylist') {
  return (
    <>
      <button className="song-modal-button" songId={value} onClick={() => setShowModal(true)}>ADD TO PLAYLIST</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddToPlaylist songId={value} closeModal={()=>{setShowModal(!showModal)}}/>
        </Modal>
      )}
    </>
  );
}
}

export default SongFormModal;