const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const db = require("../../db/models");
const router = express.Router();

const validateSongs = [
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 100 })
    .withMessage("Please provide a name that is less than 100 Characters"),
  check("audioUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please enter an audio URL")
    .isLength({ max: 255 })
    .withMessage("URL must be less than 255 characters")
    .isURL()
    .withMessage("Please enter a valid audio URL"),
  check("imageUrl")
    .isLength({ max: 255 })
    .withMessage("URL must be less than 255 characters"),
  // .isURL()
  // .withMessage("Please enter a valid image URL")
  handleValidationErrors,
];

//GET SONGS
router.get(
  "/",
  asyncHandler(async (req, res) => {
    // const userId = req;
    const songs = await db.Song.findAll();
    return res.json(songs);
  })
);

//CREATE SONG
router.post(
  "/",
  validateSongs,
  asyncHandler(async (req, res) => {
    const song = await db.Song.create(req.body);
    return res.json(song);
  })
);

//EDIT SONG

router.put(
  "/",
  validateSongs,
  asyncHandler(async (req, res) => {
    const song = await db.Song.findByPk(req.body.id);
    await song.update(req.body);
    return res.json(song);
  })
);

//delete song
router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { songId } = req.body;
    const song = await db.Song.findByPk(songId);
    await song.destroy();
    return res.json(`delete song ${songId}, success`);
  })
);

module.exports = router;
