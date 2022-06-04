// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as songActions from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";

function AddSongForm({closeModal}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  
  
  const user = useSelector((state)=>state.session.user) 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // return dispatch(songActions.createSong({ name, imageUrl, userId: user.id })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
    return dispatch(songActions.createSong({ name, audioUrl, imgUrl:imageUrl, userId: user.id })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) 
          {setErrors(data.errors); 
          return data.errors;
          }
        }
      
    ).then((data)=>{
      //WHEN THERE IS AN ERROR I GET AN ARRAY FROM DATA
      ///WHEN THERE IS NOT AN ERROR I GET AN OBJECT (SUCCESSFUL PROMISE)
      //CLOSE MODAL ONLY IF YOU GET AN OBJECT
      if (!Array.isArray(data)) {closeModal()}
  } )
   
  };

  return (
    <form onSubmit={handleSubmit}> 
    <h1>ADD NEW SONG</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx} className='errors'>{error}</li>
        ))}
      </ul>
      <label>
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
      <label>
        Audio URL
        <div>
            <input
            className="form-input"
            type="text"
            value={audioUrl}
            onChange={(e) => setAudioUrl(e.target.value)}
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

export default AddSongForm;