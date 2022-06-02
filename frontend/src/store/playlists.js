// frontend/src/store/playlists.js
import { csrfFetch } from './csrf';



const LOAD_PLAYLIST = 'playlist/loadPlaylist'
const ADD_PLAYLIST = 'playlist/addPlaylist';
const DELETE_PLAYLIST= 'playlist/removePlaylist';
const UPDATE_PLAYLIST= 'playlist/updatePlaylist';



const loadPlaylist = playlists=> {
    return {
        type: LOAD_PLAYLIST,
        playlists
    }
}


const addPlaylist = (playlist) => {
    return {
        type: ADD_PLAYLIST,
        playlist
    }
}


const updatePlaylist = (playlist) => {
  return {
      type: UPDATE_PLAYLIST,
      playlist
  }
}

const removePlaylist = (playlistId) => {
  return {
    type: DELETE_PLAYLIST,
    playlistId
  }
}



//  ADD PLAYLIST
export const createPlaylist = (playlist) => async (dispatch) => {
  // const userId = 1;
  const { name, imageUrl, userId } = playlist;
  const response = await csrfFetch("/api/playlists", {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      userId
    }),
  });
  const data = await response.json();
  dispatch(addPlaylist(data));
  return response;
};


//GET ALL PLAYLISTS
export const getAllPlaylists = () => async(dispatch) => {
    const response = await csrfFetch('/api/playlists')
    const playlists = await response.json();
    dispatch(loadPlaylist(playlists))
}

//GET MY PLAYLISTS (LOGGED IN USER)

export const getMyPlaylists = (userId) => async(dispatch) => {
  console.log('getMYPLAYLIST', userId)
  const response = await csrfFetch('/api/playlists/mine', {
    method: "POST",
    body: JSON.stringify({
      userId: userId
    })
  });
  const playlists = await response.json();
  dispatch(loadPlaylist(playlists))
}


//REMOVE  PLAYLIST

export const deletePlaylist = (playlistId) => async(dispatch) => {
  const response = await csrfFetch(`/api/playlists`,
  {
    method: "DELETE",
    body: JSON.stringify({playlistId})
  })
  dispatch(removePlaylist(playlistId))
  return response
}

//ADD SONG TO PLAYLIST



//EDIT PLAYLIST

export const editPlaylist = (playlist) => async (dispatch) => {

  const { name, imageUrl, userId, id } = playlist;
  console.log(playlist,'playlist in store----')
  const response = await csrfFetch("/api/playlists", {
    method: "PUT",
    body: JSON.stringify({
      name,
      imageUrl,
      userId,
      id
    }),
  });
  const data = await response.json();
  dispatch(updatePlaylist(data));
  return response;
};

//GET SONGS IN PLAYLIST

export const getSongsInPlaylist = (playlistId) => async(dispatch) => {
  const response = await csrfFetch(`/api/playlists/${playlistId}`)
  const songs = await response.json();
  dispatch(loadSong(songs))
}



//SESSION REDUCER & INITIAL PARAMS 
const initialState = { }; 

const playlistReducer = (state = initialState, action) => {

  let newState;
  switch (action.type) {
    case LOAD_PLAYLIST:
        const allPlaylists = {};
        action.playlists.forEach(playlist=>{
            allPlaylists[playlist.id] = playlist
        })
        return allPlaylists
    case ADD_PLAYLIST:
        newState = {
        ...state, [action.playlist.id]: action.playlist
    }
    return newState; 
    case DELETE_PLAYLIST:
      newState = { ...state };
      delete newState[action.playlistId];
      return newState;
    case UPDATE_PLAYLIST:
        newState = {...state};
        newState[action.playlist.id]=action.playlist
        return newState;
    default:
      return state;
  }
};

export default playlistReducer;