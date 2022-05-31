const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js')
const playlistsRouter = require('./playlists')

const { restoreUser } = require('../../utils/auth.js');
const playlist = require('../../db/models/playlist.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/playlists', playlistsRouter)



router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;