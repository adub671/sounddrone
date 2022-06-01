// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";

function AddPlaylistForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  
  
  const user = useSelector((state)=>state.session.user) 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // return dispatch(playlistActions.createPlaylist({ name, imageUrl, userId: user.id })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
    dispatch(playlistActions.createPlaylist({ name, imageUrl, userId: user.id }))
    setName('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}> 
    <h1>ADD NEW PLAYLIST</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Playlist Name
        <div>
            <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
      </label>
      <label>
        Image Url
        <div>
            <input
            className="form-input"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            />
        </div>
      </label>
      <button id="form-button" type="submit">Submit</button>
    </form>
  );
}

export default AddPlaylistForm;