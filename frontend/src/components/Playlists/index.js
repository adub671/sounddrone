import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as playlistActions from "../../store/playlists";
import AddPlaylistForm from "./AddPlaylistForm";
import PlaylistFormModal from "./PlayListModal";
import AudioPlayer from 'react-h5-audio-player'
import Playlist from "./Playlist";
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
            <div className="playlists-container">
            <div className="playlist-header">
            <h1 className="playlist-title">Playlists</h1>
            <PlaylistFormModal type='new' />
            </div>
                <ul>
                    { 
                    keyArr.map(playlistId => {
                        
                        return (
                            <>
                            <Playlist playlists={playlists} playlistId={playlistId}/>
                            </>

                        )
                    })}
                </ul>
            </div>


        </div>
    )

}