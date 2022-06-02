import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songActions from "../../store/songs";
 import AddSongForm from "./AddSongForm";
 import SongFormModal from "./SongModal";
 import './Songs.css'


export default function(Songs) {
    const dispatch = useDispatch();
    const songs = useSelector((state)=>state.songs)
    const keyArr = Object.keys(songs)

    const handleDelete = (e) => {
        const songId = e.target.value
        dispatch(songActions.deleteSong(songId))
    }

    useEffect(()=>{
        dispatch(songActions.getAllSongs())
    },[dispatch])

    if (!songs) {
        return (<h1>SONGS LOADING/NOT FOUND</h1>)
    }
    return (
        <div>
            <h1>Tracks</h1>
            <SongFormModal type='new' />
            <ul>
                {keyArr.map(songId=>{return (
                <li key={songId}>
                    <img src={songs[songId].imgUrl} alt={songs[songId].name} className='song-image'></img>
                    {songs[songId].name}
                    <div>URL:{songs[songId].audioUrl}</div>
                    <SongFormModal value={songId} className='edit-button' type='edit' />
                    <button value={songId} onClick={handleDelete} className='delete-button'>DELETE SONG</button>
                    <SongFormModal value={songId} className='edit-button' type='addToPlaylist' />
                

                </li>
                
                )})}
            </ul>
        
            
        
        </div>
    )

}