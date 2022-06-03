'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
    Playlist.belongsToMany(models.Song, {
      through: 'SongPlaylistJoin',
      foreignKey: 'playlistId',
      otherKey: 'songId'
    })
  };
  return Playlist;
};