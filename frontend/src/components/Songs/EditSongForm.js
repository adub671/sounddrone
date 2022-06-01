// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useEffect, useState } from "react";
import * as songActions from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
// import './EditSongForm.css'

function EditSongForm({songId}) {

  const dispatch = useDispatch();
  useEffect(()=>{},[dispatch])
  
  const user = useSelector((state)=>state.session.user) ;
  const songs = useSelector((state)=>state.songs);

  const [name, setName] = useState(songs[songId].name);
  const [imageUrl, setImageUrl] = useState(songs[songId].imgUrl);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    console.log(e.target.value,'E*******')
    e.preventDefault();
    setErrors([]);
    // return dispatch(songActions.createSong({ name, imageUrl, userId: user.id })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
    dispatch(songActions.editSong({ name, imgUrl: imageUrl, userId: user.id, id: songId }))
    setName('');
    setImageUrl('');
  };

  return (
    <>
      <h1 className="edit-form-title">EDIT SONG</h1>
      <div className='form-container'>
      <div className="img-preview">
        <div id='img-preview-text'>Image Preview</div>
        <img className="modal-img" src={imageUrl}/>
      </div>
      <form onSubmit={handleSubmit}
      value={songId}> 
      
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="form-label">
          Song Name
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
        <label className="form-label">
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
      </div>
    </>
  );
}

export default EditSongForm;