const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const db = require('../../db/models');
const user = require('../../db/models/user');
const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

  //GET PLAYLISTS
  router.get(
    '/',  asyncHandler(async (req, res) => {
        console.log(req.session,'reqUser--');
        const playlists = await db.Playlist.findAll();
        return res.json(playlists);
     }
  ))

  //GET MY PLAYLIST

  router.post(
    '/mine',  asyncHandler(async (req, res) => {
      const userId = req.body.userId;
        const playlists = await db.Playlist.findAll( {where: {userId}});
        return res.json(playlists);
     }
  ))


  //CREATE PLAYLIST
  router.post(
    '/',
    asyncHandler(async (req, res) => {
      const playlist = await db.Playlist.create(req.body);
      return res.json(playlist);

    }),
  );

  //EDIT PLAYLIST

   router.put(
    '/',
    asyncHandler(async (req, res) => {
      console.log('PUT!!!!!', req.body)
      const playlist = await db.Playlist.findByPk(req.body.id);
      await playlist.update(req.body);
      console.log(playlist,'edit playlist in backend')
      return res.json(playlist);

    }),
  );


//delete playlist
  router.delete(
    '/',
    asyncHandler(async (req, res) => {

     
      const {playlistId} = req.body
      const playlist = await db.Playlist.findByPk(playlistId);
      await playlist.destroy()
      return res.json(`delete playlist ${playlistId}, success`)

    }),
  );


  //GET SONGS IN PLAYLIST
  router.get(
    '/:playlistId',  asyncHandler(async (req, res) => {
        console.log(req.session,'reqUser--');
        const playlistId = req.params.playlistId;
        console.log(playlistId,'playlistId----')
        const songs = await db.Playlist.findAll(
        {
            // where: {id: playlistId},
          include: {model: db.SongPlaylistJoin}
        }
        );
        return res.json(songs);
     }
  ))


  module.exports = router;