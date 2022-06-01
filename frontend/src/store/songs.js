// frontend/src/store/songs.js
import { csrfFetch } from './csrf';



const LOAD_SONG = 'song/loadSong'
const ADD_SONG = 'song/addSong';
const DELETE_SONG= 'song/removeSong';
const UPDATE_SONG= 'song/updateSong';



const loadSong = songs=> {
    return {
        type: LOAD_SONG,
        songs
    }
}


const addSong = (song) => {
    return {
        type: ADD_SONG,
        song
    }
}


const updateSong = (song) => {
  return {
      type: UPDATE_SONG,
      song
  }
}

const removeSong = (songId) => {
  return {
    type: DELETE_SONG,
    songId
  }
}



//  ADD SONG
export const createSong = (song) => async (dispatch) => {
  // const userId = 1;
  const { name, audioUrl, imgUrl, userId } = song;
  const response = await csrfFetch("/api/songs", {
    method: "POST",
    body: JSON.stringify({
      name,
      audioUrl,
      imgUrl,
      userId
    }),
  });
  const data = await response.json();
  dispatch(addSong(data));
  return response;
};


//GET ALL SONGS
export const getAllSongs = () => async(dispatch) => {
    const response = await csrfFetch('/api/songs')
    const songs = await response.json();
    dispatch(loadSong(songs))
}

//REMOVE  SONG

export const deleteSong = (songId) => async(dispatch) => {
  const response = await csrfFetch(`/api/songs`,
  {
    method: "DELETE",
    body: JSON.stringify({songId})
  })
  dispatch(removeSong(songId))
  return response
}

//ADD SONG TO SONG



//EDIT SONG

export const editSong = (song) => async (dispatch) => {

  const { name, imageUrl, userId, id } = song;
  const response = await csrfFetch("/api/songs", {
    method: "PUT",
    body: JSON.stringify({
      name,
      imageUrl,
      userId,
      id
    }),
  });
  const data = await response.json();
  dispatch(updateSong(data));
  return response;
};



//SESSION REDUCER & INITIAL PARAMS 
const initialState = { }; 

const songReducer = (state = initialState, action) => {

  let newState;
  switch (action.type) {
    case LOAD_SONG:
        const allSongs = {};
        action.songs.forEach(song=>{
            allSongs[song.id] = song
        })
        return allSongs
    case ADD_SONG:
        newState = {
        ...state, [action.song.id]: action.song
    }
    return newState; 
    case DELETE_SONG:
      newState = { ...state };
      delete newState[action.songId];
      return newState;
    case UPDATE_SONG:
        newState = {...state};
        newState[action.song.id]=action.song
        return newState;
    default:
      return state;
  }
};

export default songReducer;
