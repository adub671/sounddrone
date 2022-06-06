// frontend/src/components/Songs/AddToPlaylist.js
import React, { useEffect, useState } from "react";
import * as songActions from "../../store/songs";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";
import './SongModal.css';
import LoginForm from "../LoginFormModal/LoginForm";
import PlaylistFormModal from "../Playlists/PlayListModal";

export default function AddToPlaylist({closeModal, songId}) {
    const dispatch = useDispatch();
    const playlists = useSelector((state)=>state.playlists)
    const user = useSelector((state)=>state.session.user)
    const keyArr = Object.keys(playlists)
    // console.log(user.id,'keyArr-----')
    


    useEffect(()=>{
       user && dispatch(playlistActions.getMyPlaylists(user.id))
    },[dispatch, user])

    const handleAddToPlaylist = (e) =>{
        e.preventDefault();
        const playlistId = e.target.value;
        console.log()
         dispatch(playlistActions.addSongToPlaylist(songId, playlistId))

        closeModal();
    }
    if (!user) {
        return ( <LoginForm title='Login To Add To Playlist'/>)
    } 
    if (keyArr.length === 0 ) {return <> <h1>PLAYLISTS NOT FOUND, TRY ADDING A PLAYLIST</h1> <PlaylistFormModal type='new' /></>}
    else {
    return (
    <form onSubmit={()=>{}}> 
    <h1>ADD TO PLAYLIST</h1>
        <ul>
            {keyArr.map(playlistId=>{return (
            <div className="add-to-playlist-container"> 
            <li key={playlistId}>
                <img className='playlist-image' src={playlists[playlistId].imageUrl} alt={playlists[playlistId].name}></img>
                <div>{playlists[playlistId].name} </div>
                <button value={playlistId} onClick={handleAddToPlaylist} className='add-to-playlist-button' songId={songId}>ADD TO PLAYLIST</button>
            </li> 
            </div>   
            )})}
        </ul>
    </form>
  );
}



}

