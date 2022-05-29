import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import icon from '../../images/850899-200.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser}  />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* ***note replaced with login modal*** <NavLink to="/login" className="navlink">Log In</NavLink> */}
        <NavLink to="/signup" className="navlink">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav>
        <ul>
            <li>
                {/* <img alt="icon" src={icon} /> */}
                <NavLink className="navlink" exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;