// frontend/src/components/Songs/AddToPlaylist.js
import React, { useEffect, useState } from "react";
import * as songActions from "../../store/songs";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";
import './SongModal.css';

export default function AddToPlaylist({closeModal}) {
    const dispatch = useDispatch();
    const playlists = useSelector((state)=>state.playlists)
    const user = useSelector((state)=>state.session.user)
    const keyArr = Object.keys(playlists)
    console.log(user.id,'keyArr-----')
    


    useEffect(()=>{
        dispatch(playlistActions.getMyPlaylists(user.id))
    },[dispatch])

    const handleAddToPlaylist = (e) =>{
        e.preventDefault();
        const playlistId = e.target.value;
        console.log(playlistId,'playlistID in modal-----')


        closeModal();
    }
    
    return (
    <form onSubmit={()=>{}}> 
    <h1>ADD TO PLAYLIST</h1>
        <ul>
            {keyArr.map(playlistId=>{return (
            <li key={playlistId}>
                <img className='playlist-image' src={playlists[playlistId].imageUrl} alt={playlists[playlistId].name}></img>
                {playlists[playlistId].name} 
                <button value={playlistId} onClick={handleAddToPlaylist} className='add-to-playlist-button'>ADD TO PLAYLIST</button>
            </li> 
            )})}
        </ul>
    </form>
  );
 



}

