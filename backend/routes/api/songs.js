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

  //GET SONGS
  router.get(
    '/',  asyncHandler(async (req, res) => {
        const userId = req;
        const songs = await db.Song.findAll();
        return res.json(songs);
     }
  ))


  //CREATE SONG
  router.post(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req.body,'***********')
      const song = await db.Song.create(req.body);
      return res.json(song);

    }),
  );

  //EDIT SONG

   router.put(
    '/',
    asyncHandler(async (req, res) => {
      const song = await db.Song.findByPk(req.body.id);
      await song.update(req.body);
      return res.json(song);

    }),
  );


//delete song
  router.delete(
    '/',
    asyncHandler(async (req, res) => {

     
      const {songId} = req.body
      const song = await db.Song.findByPk(songId);
      await song.destroy()
      return res.json(`delete song ${songId}, success`)

    }),
  );




  module.exports = router;