// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useEffect, useState } from "react";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";
import './EditPlaylistForm.css'

function EditPlaylistForm({playlistId, closeModal}) {

  const dispatch = useDispatch();
  console.log(playlistId,'playlistID******')
 
  
  const user = useSelector((state)=>state.session.user) ;
  const playlists = useSelector((state)=>state.playlists);
  console.log(user,'user***')

  const [name, setName] = useState(playlists[playlistId].name);
  const [imageUrl, setImageUrl] = useState(playlists[playlistId].imageUrl);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(playlistActions.editPlaylist({ name, imageUrl, userId: user.id, id: playlistId })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) 
          {setErrors(data.errors); 
          return data.errors;
          };
      }
      ).then((data)=>{
        //WHEN THERE IS AN ERROR I GET AN ARRAY FROM DATA
        ///WHEN THERE IS NOT AN ERROR I GET AN OBJECT (SUCCESSFUL PROMISE)
        //CLOSE MODAL ONLY IF YOU GET AN OBJECT
        if (!Array.isArray(data)) {closeModal()}
    } )
  };

  return (
    <>
      <h1 className="edit-form-title">EDIT PLAYLIST</h1>
      <div className='form-container'>
      <div className="img-preview">
        <div id='img-preview-text'>Image Preview</div>
        <img className="modal-img" src={imageUrl}/>
      </div>
      <form onSubmit={handleSubmit}
      value={playlistId}> 
      
        <ul>
          {errors.map((error, idx) => (
            <li key={idx} className='errors'>{error}</li>
          ))}
        </ul>
        <label className="form-label">
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

export default EditPlaylistForm;