'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongPlaylistJoin = sequelize.define('SongPlaylistJoin', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  SongPlaylistJoin.associate = function(models) {
    // associations can be defined here
     SongPlaylistJoin.belongsTo(models.Song, {foreignKey: 'songId'})
     SongPlaylistJoin.belongsTo(models.Playlist, {foreignKey: 'playlistId'})
  };
  return SongPlaylistJoin;
};