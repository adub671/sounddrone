import React, { useState } from "react";
import * as playlistActions from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";


export default function PlaylistSongs ({playlistId}) {
    const playlistSongs = [];


    useEffect(() => {
        dispatch(playlistActions.getSongsInPlaylist(playlistId))
    }, [dispatch])

    return (<ul className='songs-in-playlist' id={playlistId}>
        { 
            playlistSongs.map((song)=>{
                return (
                    <li className='song-in-playlist'>
                        {song.name}                    
                    </li>
                )
            })
        }
    </ul>
    )



}