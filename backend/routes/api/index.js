const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const songsRouter = require("./songs.js");
const playlistsRouter = require("./playlists");
const SongPlaylistRouter = require("./songPlaylist.js");

const { restoreUser } = require("../../utils/auth.js");
router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/songs", songsRouter);
router.use("/playlists", playlistsRouter);
router.use("/songplaylist", SongPlaylistRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
