// frontend/src/store/playlists.js
import { csrfFetch } from './csrf';



const LOAD_PLAYLIST = 'playlist/loadPlaylist'
const ADD_PLAYLIST = 'playlist/addPlaylist';
const DELETE_PLAYLIST= 'playlist/removePlaylist';
const UPDATE_PLAYLIST= 'playlist/updatePlaylist';
// const LOAD_PLAYLIST_SONGS = 'playlist/loadPlaylistSongs'



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

// const loadPlaylistSongs = (playlistId) => {
//   return {
//     type: LOAD_PLAYLIST_SONGS,
//     playlistId
//   }
// }



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
export const addSongToPlaylist = (songId, playlistId) => async (dispatch) => {
  const response = await csrfFetch(`/api/songplaylist/add`, {
    method: "POST",
    body: JSON.stringify({
      songId,
      playlistId
    }),
  });
  const data = await response.json();
  // dispatch(addPlaylist(data));
  return response;
};

//REMOVE SONG FROM  PLAYLIST

export const deleteSongFromAllPlaylists = (songId) => async(dispatch) => {
  const response = await csrfFetch(`/api/songplaylist/delete/all`,
  {
    method: "DELETE",
    body: JSON.stringify({songId})
  })
  // dispatch(removePlaylist(playlistId)) getAllPlaylists?

  return response
}

//REMOVE PLAYLIST FROM SONG (CLEAR PLAYLIST)
export const clearPlaylist = (playlistId) => async(dispatch) => {
  const response = await csrfFetch(`/api/songplaylist/delete/${playlistId}`,
  {
    method: "DELETE",
    body: JSON.stringify({playlistId})
  })

  return response;
}

//EDIT PLAYLIST

export const editPlaylist = (playlist) => async (dispatch) => {

  const { name, imageUrl, userId, id } = playlist;
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
    // case LOAD_PLAYLIST_SONGS:
    //   newState = {...state};
    //   newState[action.playlist.id].playlist
        return newState
    default:
      return state;
  }
};

export default playlistReducer;