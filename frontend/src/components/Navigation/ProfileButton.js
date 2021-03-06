// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} id='profile-button'>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
        <ul >
          <li className="dropdown-text">{user.username}</li>
          <li className="dropdown-text">{user.email}</li>
          <li className="dropdown-logout">
            <button onClick={logout}>LOG OUT</button>
          </li>
        </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;