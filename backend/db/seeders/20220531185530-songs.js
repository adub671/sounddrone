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
          imgUrl: 'https://live.staticflickr.com/5508/11048087863_cedda54615_c.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Niels Klein- Radion Mix',
          audioUrl: 'https://hotmixes.net/mixes/n/NIELS.KLEIN.-.Radion.Mix.mp3',
          imgUrl: 'https://live.staticflickr.com/3672/11131830413_c8a4e87c92_z.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Not Happy Jan - White Angst Vol 1',
          audioUrl: 'https://hotmixes.net/mixes/n/NOT.HAPPY.JAN.-.White.Angst.Vol.1.mp3',
          imgUrl: 'https://live.staticflickr.com/3819/11135173653_d1c11a3428_c.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Not Happy Jan - White Angst Vol 2',
          audioUrl: 'https://hotmixes.net/mixes/n/NOT.HAPPY.JAN.-.White.Angst.Vol.2.mp3',
          imgUrl: 'https://art.thewalters.org/images/art/large/l_pl2_96156_fnt_bw.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mule Driver - Tribute to Tender Music (2004-2009)',
          audioUrl: 'https://hotmixes.net/mixes/m/mule.driver/MULE.DRIVER.-.Tribute.to.Teder.Music.2004-2009.mp3',
          imgUrl: 'https://art.thewalters.org/images/art/large/l_ps3_95309_fnt_dd_jp09.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mule Driver - Live at Alphabet Tel Aviv 10/1/2015',
          audioUrl: 'https://hotmixes.net/mixes/m/mule.driver/MULE.DRIVER.-.LIVE.@.Alphabet.Tel.Aviv.10.01.2015.mp3',
          imgUrl: 'https://cdn.pixabay.com/photo/2019/07/24/18/16/ask-4360888_960_720.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'My Fantasy - Flash Into The Italo Night',
          audioUrl: 'https://hotmixes.net/mixes/m/MR.FANTASY-Flash.into.the.italo.night.mp3',
          imgUrl: 'https://art.thewalters.org/images/art/large/l_ps3_95206_fnt_dd_jp09.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Orgue Electronique & Fre2k - Bahn 2 Bahn (2012)',
          audioUrl: 'https://hotmixes.net/mixes/o/ORGUE.ELECTRONIQUE.&.FRE2K.-.Bahn2Bahn.Mix.2012.mp3',
          imgUrl: 'https://cdn.pixabay.com/photo/2019/07/24/18/16/ask-4360888_960_720.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Etbonz - To Tame the Beast',
          audioUrl: 'https://hotmixes.net/mixes/e/ETBONZ-To.Tame.the.Beast.mp3',
          imgUrl: 'https://art.thewalters.org/images/art/thumbnails/pl2_4188_fnt_bw_h49.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'George T - The 6 Hour CBS MAXI MIX 2006',
          audioUrl: 'https://hotmixes.net/mixes/g/GEORGE.T.%20-.The.Six.Hour.CBS.Maxi.Mix.2006-[CBSmix].mp3',
          imgUrl: 'https://www.liveabout.com/thmb/xt9BD2IjulkT4iuLgNyRB6mrRgU=/3559x2669/smart/filters:no_upscale()/low-angle-view-of-illuminated-disco-ball-960759378-5c7c16b946e0fb00011bf325.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guy Tavares - Return to The Acidplanet Trouw (8-15-14)',
          audioUrl: 'https://hotmixes.net/mixes/g/Guy.Tavares.-.Return.to.The.Acidplanet.Trouw.15.08.14.mp3',
          imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65f3a530396449.5620d64e076ff.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'GMM - Convivium Part 2',
          audioUrl: 'https://hotmixes.net/mixes/g/GMM.-.Convivium.Part.2.mp3',
          imgUrl: 'https://images.squarespace-cdn.com/content/v1/5ec3f5644dfc0e76e35e40fa/1589900727672-RYVDUOQCXSDL5YJYXCNG/lgog.jpg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kwark - Subatomic Flavours Vol 2 2008',
          audioUrl: 'https://hotmixes.net/mixes/k/KWARK.-.Subatomic.Flavours.Vol.2.2008.mp3',
          imgUrl: 'https://i0.wp.com/revolutionized.com/wp-content/uploads/sites/5/2020/01/subatomic-particles-1.jpg?fit=750%2C500&ssl=1',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kastil - Phuturelabs Podcast',
          audioUrl: 'https://hotmixes.net/mixes/e/ETBONZ-To.Tame.the.Beast.mp3',
          imgUrl: 'https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2021/09/AdobeStock_118114361-scaled.jpeg',
          userId: 2,
          externalLink: 'https://hotmixes.net/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Keep The Faith- Discograss',
          audioUrl: 'https://hotmixes.net/mixes/k/KEEP.THE.FAITH.-.Discograss.(and.you.can.smoke.it.too).mp3',
          imgUrl: 'https://news.syr.edu/wp-content/uploads/2015/05/cern_4.jpg',
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
