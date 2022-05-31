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

//REMOVE  PLAYLIST

export const deletePlaylist = (playlistId) => async(dispatch) => {
  const response = await csrfFetch(`/api/playlists/${playlistId}`,
  {
    method: "DELETE"
  })
  dispatch(removePlaylist(playlistId))
  return response
}

//ADD SONG TO PLAYLIST

//UPDATE PLAYLIST



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
      delete newState[action.itemId];
      return newState;
    case UPDATE_PLAYLIST:
        return null
        //TO DO
    default:
      return state;
  }
};

export default playlistReducer;
