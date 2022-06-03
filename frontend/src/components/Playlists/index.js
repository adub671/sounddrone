import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as playlistActions from "../../store/playlists";
import AddPlaylistForm from "./AddPlaylistForm";
import PlaylistFormModal from "./PlayListModal";
import AudioPlayer from 'react-h5-audio-player'
import './Playlists.css';

export default function Playlists() {
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists)
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




    useEffect(() => {
        dispatch(playlistActions.getAllPlaylists())
    }, [dispatch])



    if (!playlists) {
        return (<h1>PLAYLISTS LOADING/NOT FOUND</h1>)
    }
    return (
        <div>
            <h1>Playlists</h1>
            <PlaylistFormModal type='new' />
            <div className="playlists-container">
                <ul>
                    {keyArr.map(playlistId => {
                        return (
                            <div className="playlist-container">
                                <li key={playlistId}>
                                    <img src={playlists[playlistId].imageUrl} alt={playlists[playlistId].name} className='playlist-image'></img>

                                    <div className="playlist-name">{playlists[playlistId].name}</div>
                                    <div className="playlist-songs-container">
                                
                                    {
                                  
                                        playlists[playlistId].Songs?.map((song)=>
                                        {
                                        return (
                                        <li className="playlist-song" id={song.id}>
                                            <div className="song-container">
                                            <img src={song.imgUrl} className='tiny-image'></img>
                                            {song.name}
                                            </div>
                                        </li>) 
                                        }   
                                    )
                                    }
                                    
                                    
                                    
                                    </div>

                                    <div> </div>
                                    <div className="user-playlist-buttons">
                                        <PlaylistFormModal value={playlistId} id='playlist-edit-button' className='user-playlist-button' />
                                        <button value={playlistId} onClick={handleDelete} className='playlist-button' id='playlist-delete-button'>DELETE PLAYLIST</button>
                                    </div>
                                </li>
                            </div>

                        )
                    })}
                </ul>
            </div>


        </div>
    )

}