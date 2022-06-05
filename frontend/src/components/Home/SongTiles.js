import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './SongTiles.css'

export default function SongTile({song, setAudioUrl}){
    console.log(song,'songtile')
    return ( 
    <div className="song-tile" onClick={()=>{setAudioUrl()}}>
        <img src={song.imgUrl} className='song-tile-image'/>
    <div className="song-tile-name">{song.name}</div>
    </div>)

}