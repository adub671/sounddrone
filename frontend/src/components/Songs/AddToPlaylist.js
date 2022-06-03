// frontend/src/components/Songs/AddToPlaylist.js
import React, { useEffect, useState } from "react";
import * as songActions from "../../store/songs";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";
import './SongModal.css';
import LoginForm from "../LoginFormModal/LoginForm";

export default function AddToPlaylist({closeModal}) {
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
        // dispatch(playlistActions.getMyPlaylists(user.id))

        closeModal();
    }
    if (!user) {
        return ( <LoginForm title='Login To Add To Playlist'/>)
    } 
    if (keyArr.length === 0 ) {return <h1>PLAYLISTS LOADING...</h1>}
    else {
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



}

