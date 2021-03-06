import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as playlistActions from "../../store/playlists";
import AddPlaylistForm from "./AddPlaylistForm";
import PlaylistFormModal from "./PlayListModal";
import AudioPlayer from 'react-h5-audio-player'



export default function ({ playlistId}) {
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists)
    const user = useSelector((state) => state.session.user)
    const playlist = playlists[playlistId];
    const [audioUrl, setAudioUrl] = useState('');
    const [playingName, setPlayingName] = useState('');

    useEffect(()=> {
        if (playlist.Songs) {setAudioUrl(playlist?.Songs[0]?.audioUrl); 
            setPlayingName(playlist?.Songs[0]?.name) ;} 
        else {
            return null
        }
    },[])
    useEffect(() => {
        dispatch(playlistActions.getAllPlaylists())
    }, [dispatch])
    
    const handleDelete = (e) => {
        const playlistId = e.target.value
        dispatch(playlistActions.clearPlaylist(playlistId))
        dispatch(playlistActions.deletePlaylist(playlistId))
        
    }
    
    const loadToPlayer = (e) => {
        const url = e.target.attributes.url.value
        const name = e.target.attributes.name.value
        setPlayingName(name)
        setAudioUrl(url)
    }
return (
<>
<div className="playlist-container">
    <li key={playlistId}>
        <div className="playlist-left-container">
            <img src={playlist.imageUrl} alt={playlist.name} className='playlist-image'></img>
            <div className="user-playlist-buttons">
                { user && user.id === playlist.userId ? <>
                <PlaylistFormModal value={playlistId} id='playlist-edit-button' className='user-playlist-button' />
                <button value={playlistId} onClick={handleDelete} className='user-playlist-button' id='playlist-delete-button'>DELETE PLAYLIST</button>
                </>
                : null}
            </div>
        </div>
        <div className="playlist-right-container">
            <AudioPlayer src={audioUrl} autoPlayAfterSrcChange={false}/>
            <div className="playlist-name">
               <span className="playlist-name-text"> {playlist.name}: </span>
                <div className="scrolling-container">
                    <span className="playing-name"> {playingName}</span>
                </div>
            </div>
            <div className="playlist-songs-container">
                <ul>
                {
                    playlist.Songs?.map((song,idx)=>
                    {
                    return (
                    <li className="playlist-song" id={idx} songid={song.id} key={idx} onClick={loadToPlayer}>
                        <div className="playlist-song-container" id={idx} url={song.audioUrl} name={song.name}>
                        <img src={song.imgUrl} className='tiny-image'></img>
                        {song.name}
                        </div>
                    </li>) 
                    })
                }
                </ul>
            </div>
        </div>
        <div> </div>

    </li>
</div>
</>)


            }