// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddSongForm from './AddSongForm';
import EditSongForm from './EditSongForm';


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
} else {
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
}

export default SongFormModal;