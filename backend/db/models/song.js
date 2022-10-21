'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    audioUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    externalLink: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, {foreignKey: 'userId'})
    Song.belongsToMany(models.Playlist, {
      through: 'SongPlaylistJoin',
      foreignKey: 'songId',
      otherKey: 'playlistId'
    })
  };
  return Song;
};