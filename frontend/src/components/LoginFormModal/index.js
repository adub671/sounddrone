// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({className}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span  className={className} onClick={() => setShowModal(true)}>LOG IN</span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;