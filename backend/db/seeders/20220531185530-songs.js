'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Songs', [
        {
        name: 'Primrose Path 2019 - DANK MATTER',
        audioUrl: 'https://hotmixes.net/mixes/d/DANK.MATTER.-.Primrose.Path.2019.mp3',
        imgUrl: 'https://i.imgur.com/SvWMjAN.jpeg',
        userId: 1,
        externalLink: 'https://hotmixes.net/',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: 'Violent Onsen Geisha - MK Ultraterrestrial Broadcasting',
          audioUrl: 'https://hotmixes.net/mixes/m/mk.ultraterrestrial.broadcasting/The.MK.Ultraterrestrial.Broadcasting.Conspiracy.presents.Violent.Onsen.Geisha.mp3',
          imgUrl: 'https://i.imgur.com/npvlWYo.jpeg',
          userId: 1,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dont Let the bugs bite mix - DJ Overdose',
          audioUrl: 'https://hotmixes.net/mixes/m/mk.ultraterrestrial.broadcasting/The.MK.Ultraterrestrial.Broadcasting.Conspiracy.presents.Violent.Onsen.Geisha.mp3',
          imgUrl: 'https://i.imgur.com/Cdf2xq3.jpeg',
          userId: 1,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },

    
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Songs', null, {});
  
  }
};
