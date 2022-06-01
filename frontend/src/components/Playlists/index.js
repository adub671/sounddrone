import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as playlistActions from "../../store/playlists";
import AddPlaylistForm from "./AddPlaylistForm";
import PlaylistFormModal from "./PlayListModal";


// import './playlists.css';

export default function Playlists() {
    const dispatch = useDispatch();
    const playlists = useSelector((state)=>state.playlists)
    const keyArr = Object.keys(playlists)
    const handleDelete = (e) => {
        const playlistId = e.target.value
        dispatch(playlistActions.deletePlaylist(playlistId))
    }

    const handleEdit = (e) => {
        const playlistId = e.target.value
        //NEEDS TO DISPLAY EDIT FORM (preferably in a modal)
        // dispatch(playlistActions.deletePlaylist(playlistId))
    }

    const handleAddPlaylist = (e) => {
        const playlistId = e.target.value
        //NEEDS TO DISPLAY EDIT FORM (preferably in a modal)
        // dispatch(playlistActions.deletePlaylist(playlistId))
    }
    
    


    useEffect(()=>{
        dispatch(playlistActions.getAllPlaylists())
    },[dispatch])



    if (!playlists) {
        return (<h1>PLAYLISTS LOADING/NOT FOUND</h1>)
    }
    return (
        <div>
            <h1>Playlists</h1>
            <PlaylistFormModal type='new' />
            <ul>
                {keyArr.map(playlistId=>{return (
                <li key={playlistId}>
                    <img src={playlists[playlistId].imageUrl} alt={playlists[playlistId].name}></img>
                    {playlists[playlistId].name} 
                    <div>tracks will go here</div>
                    <PlaylistFormModal value={playlistId} className='edit-button' />
                    <button value={playlistId} onClick={handleDelete} className='delete-button'>DELETE PLAYLIST</button>
                </li>
                
                )})}
            </ul>
        
            
        
        </div>
    )

}