const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const db = require('../../db/models');
const user = require('../../db/models/user');
const router = express.Router();    
   

//ADD SONG TO PLAYLIST
router.post(
    '/add',
    asyncHandler(async (req, res) => {
    const songInPlaylist = await db.SongPlaylistJoin.create(req.body);
    return res.json(songInPlaylist);

    }),
);




module.exports = router;