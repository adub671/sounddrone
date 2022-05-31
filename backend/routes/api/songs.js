const express = require('express');
const asyncHandler = require('express-async-handler');

const db = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async function(req,res){
    const songs = await db.Song.findAll({
        //where:{userId}
    })
    return res.json(songs)
}))


//CREATE SONG
router.post('/', asyncHandler(async function(req,res){

    const song = await db.Song.create(req.body);
    return res.json(song)
    // return res.redirect(`songs/${req.body.id}`)
    
    }))


//EDIT SONG
router.put('/:songId', asyncHandler(async function(req,res){


    const song = await db.Song.findByPk(req.params.songId);
    const editedSong = await song.update(req.body)
    return res.json(song)



   // return res.redirect(`songs/${req.body.id}`)

    }))

module.exports = router;