// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function AddPlaylistForm({ closeModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
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
      errs.push("Please provide a name less than 100 characters");
    }
    if (!isValidUrl(imageUrl)) {
      errs.push("Please enter a valid image URL");
    }
    if (imageUrl.length > 255) {
      errs.push("Please provide an image URL that is less than 255 Characters");
    }
    setErrors(errs);
    if (errs.length === 0) {
      return dispatch(
        playlistActions.createPlaylist({ name, imageUrl, userId: user.id })
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
          <Redirect to="/playlists" />;
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>ADD NEW PLAYLIST</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx} className="errors">
            {error}
          </li>
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
          />
        </div>
      </label>
      <button id="form-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddPlaylistForm;
