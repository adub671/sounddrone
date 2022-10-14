// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm({title, closeModal}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {setErrors(data.errors)}         
        closeModal();
      }
    );
  
  };



  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
  }
  return (
    <div>
      { title ? <h1 className="modal-title">{title}</h1> : <h1 className="modal-title">Login</h1>}
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <div>
              <input
              className="login-input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              />
          </div>
        </label>
        <label>
          Password
          <div>
              <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
        </label>
        <button id="login-button" type="submit">LOGIN</button>
        <button id="login-button" type="button" className='demo' onClick={demoLogin}>DEMO USER LOGIN</button>
        
      </form>
    </div>
  );
}

export default LoginForm;