// frontend/src/store/playlists.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const LOAD_PLAYLIST = 'playlist/loadPlaylist'
const ADD_PLAYLIST = 'playlist/addPlaylist';
const REMOVE_PLAYLIST= 'playlist/removePlaylist';
const UPDATE_PLAYLIST= 'playlist/updatePlaylist';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

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

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

//LOGIN 
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};



//  ADD PLAYLIST

export const createPlaylist = (playlist) => async (dispatch) => {
  const userId = 1;
  const { name, imageUrl } = playlist;
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


//LOGOUT USER
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};


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
    case REMOVE_PLAYLIST:
        return null
        //TO DO
    case UPDATE_PLAYLIST:
        return null
        //TO DO
    default:
      return state;
  }
};

export default playlistReducer;
