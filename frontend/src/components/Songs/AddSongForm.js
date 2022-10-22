// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as songActions from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";

function AddSongForm({ closeModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const user = useSelector((state) => state.session.user);

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
        songActions.createSong({
          name,
          audioUrl,
          imgUrl: imageUrl,
          userId: user.id,
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
    <form onSubmit={handleSubmit}>
      <h1>ADD A NEW TRACK</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx} className="errors">
            {error}
          </li>
        ))}
      </ul>
      <label>
        Song Name
        <div>
          <input
            className="form-input signup-input"
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
            className="form-input signup-input"
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
            className="form-input signup-input"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
      </label>
      <button id="login-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddSongForm;
