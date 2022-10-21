const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const db = require("../../db/models");
const router = express.Router();

const validatePlaylist = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid Playlist name."),
  check("name")
    .isLength({ max: 100 })
    .withMessage("Please provide a name less than 100 characters"),
  handleValidationErrors,
  check("imageUrl")
    .isLength({ max: 255 })
    .withMessage("URL must be less than 255 characters")
    .isURL()
    .withMessage("Please enter a valid image URL"),
];

//GET PLAYLISTS
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const playlists = await db.Playlist.findAll({
      include: { model: db.Song },
    });
    return res.json(playlists);
  })
);

//GET MY PLAYLIST

router.post(
  "/mine",
  asyncHandler(async (req, res) => {
    const userId = req.body.userId;
    const playlists = await db.Playlist.findAll({ where: { userId } });
    return res.json(playlists);
  })
);

//CREATE PLAYLIST
router.post(
  "/",
  validatePlaylist,
  asyncHandler(async (req, res) => {
    const playlist = await db.Playlist.create(req.body);
    return res.json(playlist);
  })
);

//EDIT PLAYLIST

router.put(
  "/",
  validatePlaylist,
  asyncHandler(async (req, res) => {
    const playlist = await db.Playlist.findByPk(req.body.id);
    await playlist.update(req.body);
    return res.json(playlist);
  })
);

//delete playlist
router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { playlistId } = req.body;
    const playlist = await db.Playlist.findByPk(playlistId);
    await playlist.destroy();
    return res.json(`delete playlist ${playlistId}, success`);
  })
);

//GET SONGS IN PLAYLIST
router.get(
  "/:playlistId",
  asyncHandler(async (req, res) => {
    const songsInPlaylist = await db.Playlist.findAll({
      include: { model: db.Song },
    });
    return res.json(songsInPlaylist);
  })
);

//ADD SONG TO PLAYLIST
router.post(
  "/:playlistId/add",
  asyncHandler(async (req, res) => {
    const songInPlaylist = await db.SongPlaylistJoin.create(req.body);
    return res.json(songInPlaylist);
  })
);

module.exports = router;
