// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span className="navlink" onClick={() => setShowModal(true)}>Log In</span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeModal={setShowModal=(!showModal)}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;