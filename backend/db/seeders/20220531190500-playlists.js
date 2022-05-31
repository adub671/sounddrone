'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Playlists', [
        {
        name: 'Intergalactic FM Mixes',
        imageUrl: 'https://www.intergalactic.fm/uploads/i/IFMX/original/IFM.300x300.blackk.png',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: 'Jimmy Jammers',
          imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/120793930_667895170804579_5104603077090802308_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wk2T3pH-_6gAX9sg_8s&_nc_ht=scontent-lax3-1.xx&oh=00_AT9ztbLFaHYBS8m-azCcx5PJ1cMavQQyoBG8sLgvQOw0xA&oe=62BD38C8',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Playlists', null, {});
  
  }
};
