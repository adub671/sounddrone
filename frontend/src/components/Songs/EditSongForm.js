// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as songActions from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
// import './EditSongForm.css'

function EditSongForm({ songId, closeModal, song }) {
  console.log(song, "songId in EDIT SONG");
  const dispatch = useDispatch();
  // useEffect(()=>{},[dispatch])

  const user = useSelector((state) => state.session.user);

  const [name, setName] = useState(song?.name);
  const [audioUrl, setAudioUrl] = useState(song?.audioUrl);
  const [imageUrl, setImageUrl] = useState(song?.imgUrl);
  const [errors, setErrors] = useState([]);

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const errs = [];
    if (name.length > 100) {
      errs.push("Please provide a name that is less than 100 Characters");
    }
    if (!isValidUrl(audioUrl)) {
      errs.push("Please enter a valid audio URL");
    }
    if (!isValidUrl(imageUrl)) {
      errs.push("Please enter a valid image URL");
    }
    if (audioUrl.length > 255) {
      errs.push("Please provide an audio URL that is less than 255 Characters");
    }
    if (imageUrl.length > 255) {
      errs.push("Please provide an image URL that is less than 255 Characters");
    }
    setErrors(errs);
    if (errs.length === 0) {
      return dispatch(
        songActions.editSong({
          name,
          audioUrl,
          imgUrl: imageUrl,
          userId: user.id,
          id: songId,
        })
      )
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
            return data.errors;
          }
        })
        .then((data) => {
          //WHEN THERE IS AN ERROR I GET AN ARRAY FROM DATA
          ///WHEN THERE IS NOT AN ERROR I GET AN OBJECT (SUCCESSFUL PROMISE)
          //CLOSE MODAL ONLY IF YOU GET AN OBJECT
          if (!Array.isArray(data)) {
            closeModal();
          }
        });
    }
  };

  return (
    <>
      <h1 className="edit-form-title">EDIT SONG</h1>
      <div className="form-container">
        <div className="img-preview">
          <div id="img-preview-text">Image Preview</div>
          <img className="modal-img" src={imageUrl} />
        </div>
        <form onSubmit={handleSubmit} value={songId}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx} className="errors">
                {error}
              </li>
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
            Audio Url
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
          <button id="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EditSongForm;
