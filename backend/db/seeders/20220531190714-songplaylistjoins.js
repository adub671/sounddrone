'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('SongPlaylistJoins', [
        {
          songId: 1,
          playlistId: 1
        },
        {
          songId: 2,
          playlistId: 1
        },
        {
          songId: 3,
          playlistId: 1
        },
        {
          songId: 14,
          playlistId: 3
        },
        {
          songId: 5,
          playlistId: 2
        },
        {
          songId: 10,
          playlistId: 2
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('SongPlaylistJoins', null, {});
  
  }
};
