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
        {
          name: 'E-Tekk - Get Back To Real Rap',
          audioUrl: 'https://hotmixes.net/mixes/e/E-TeKK.-.Get.Back.To.Real.Rap.80s.Megamix.mp3',
          imgUrl: 'https://i.imgur.com/Cdf2xq3.jpeg',
          userId: 1,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },        {
          name: 'EDMX Boogaloo Mix',
          audioUrl: 'https://hotmixes.net/mixes/e/EDMX-Boogaloo.Mix.mp3',
          imgUrl: 'https://i.imgur.com/Cdf2xq3.jpeg',
          userId: 1,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },        {
          name: 'Edwin Brienen - Thursday Prime 14 (2008)',
          audioUrl: 'https://hotmixes.net/mixes/e/EDWIN.BRIENEN.-.Thursday.Prime.14.2008.mp3',
          imgUrl: 'https://cdn.pixabay.com/photo/2015/05/25/16/22/beef-783566_960_720.jpg',
          userId: 3,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },        {
          name: 'Egyptian Love - Pyramix',
          audioUrl: 'https://hotmixes.net/mixes/e/EGYPTIAN.LOVER.-.Pyramix-[CBSmix].mp3',
          imgUrl: 'https://m.media-amazon.com/images/I/51-atBcS8hL._SX522_.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },        {
          name: 'Etbonz - To Tame the Beast',
          audioUrl: 'https://hotmixes.net/mixes/e/ETBONZ-To.Tame.the.Beast.mp3',
          imgUrl: 'https://cdn.pixabay.com/photo/2019/07/24/18/16/ask-4360888_960_720.jpg',
          userId: 2,
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
