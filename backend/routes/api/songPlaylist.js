const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const router = express.Router();

//ADD SONG TO PLAYLIST
router.post(
  "/add",
  asyncHandler(async (req, res) => {
    const songInPlaylist = await db.SongPlaylistJoin.create(req.body);
    return res.json(songInPlaylist);
  })
);

//DELETE SONG FROM PLAYLIST
router.delete(
  "/delete/all",
  asyncHandler(async (req, res) => {
    const { songId } = req.body;

    const songInPlaylist = await db.SongPlaylistJoin.destroy({
      where: { songId },
    });
    console.log("DELETED", songInPlaylist, "DELETEDSONG--");
    return res.json("delete success");
  })
);

//DELETE SONGS FROM PLAYLIST (AKA CLEAR PLAYLIST)
router.delete(
  "/delete/:playlistId",
  asyncHandler(async (req, res) => {
    const { playlistId } = req.body;
    console.log(playlistId, "playlistid--");
    const songInPlaylist = await db.SongPlaylistJoin.destroy({
      where: { playlistId },
    });
    return res.json(songInPlaylist, "of entries deleted");
  })
);

module.exports = router;
