import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as playlistActions from "../../store/playlists";
import AddPlaylistForm from "./AddPlaylistForm";
import PlaylistFormModal from "./PlayListModal";
import './Playlists.css'


// import './playlists.css';

export default function Playlists() {
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists)
    const user = useSelector((state) => state.session.user)
    const keyArr = Object.keys(playlists)

    const handleDelete = (e) => {
        const playlistId = e.target.value
        dispatch(playlistActions.deletePlaylist(playlistId))
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
            <ul>
                {keyArr.map(playlistId => {
                    return (
                        <li key={playlistId}>
                            <img src={playlists[playlistId].imageUrl} alt={playlists[playlistId].name} className='playlist-image'></img>
                            {playlists[playlistId].name}
                            <div>tracks will go here</div>

                            {
                                (user.id === playlists[playlistId].userId) ?
                                    <>
                                        <PlaylistFormModal value={playlistId} className='edit-button' />
                                        <button value={playlistId} onClick={handleDelete} className='delete-button'>DELETE PLAYLIST</button>
                                    </>
                                    : null
                            }

                        </li>

                    )
                })}
            </ul>



        </div>
    )

}