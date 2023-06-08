'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('products_images', [
      {
        url: 'iphone14ProMx.jpg',
        isPrimary: true,
        products_id:'1',
      },

      {
        url: 'iPhone14.jpg',
        isPrimary: true,
        products_id:'2',
      },
      {
        url: 'iphone13ProMx.jpg',
        isPrimary: true,
        products_id:'3',
      },

      {
        url: 'iphone13.jpeg',
        isPrimary: true,
        products_id:'4',
      },
      {
        url: 'iphone12ProMx.jpg',
        isPrimary: true,
        products_id:'5',
      },

      {
        url: 'iphone12.png',
        isPrimary: true,
        products_id:'6',
      },
      {
        url: 'iphone11ProMx.jpg',
        isPrimary: true,
        products_id:'7',
      },

      {
        url: 'iphone11.jpeg',
        isPrimary: true,
        products_id:'8',
      },

      {
        url: 'iPhoneXR.jpg',
        isPrimary: true,
        products_id:'9',
      },

      {
        url: 'iphoneX.jpg',
        isPrimary: true,
        products_id:'10',
      },

      {
        url: 'galaxyZFl4.jpg',
        isPrimary: true,
        products_id:'11',
      },

      {
        url: 'galaxyZF4.jpeg',
        isPrimary: true,
        products_id:'12',
      },
      {
        url: 'galaxyS23U.jpg',
        isPrimary: true,
        products_id:'13',
      },

      {
        url: 'galaxyS23.jpg',
        isPrimary: true,
        products_id:'14',
      },
      {
        url: 'galaxyNote20U.jpg',
        isPrimary: true,
        products_id:'15',
      },

      {
        url: 'galaxyA54.jpg',
        isPrimary: true,
        products_id:'16',
      },
      {
        url: 'galaxyA53.jpg',
        isPrimary: true,
        products_id:'17',
      },

      {
        url: 'galaxyA34.png',
        isPrimary: true,
        products_id:'18',
      },
      
      {
        url: 'galaxyA33.jpg',
        isPrimary: true,
        products_id:'19',
      },

      {
        url: 'realmeC35.jpeg',
        isPrimary: true,
        products_id:'20',
      },

      {
        url: 'realmeC31.jpg',
        isPrimary: true,
        products_id:'21',
      },

      {
        url: 'realmeC30.jpg',
        isPrimary: true,
        products_id:'22',
      },
      {
        url: 'realmeC11.jpg',
        isPrimary: true,
        products_id:'23',
      },

      {
        url: 'realme9Pro.jpg',
        isPrimary: true,
        products_id:'24',
      },
      {
        url: 'realme9.jpg',
        isPrimary: true,
        products_id:'25',
      },

      {
        url: 'Mi12-Lite.jpg',
        isPrimary: true,
        products_id:'26',
      },
      {
        url: 'Mi12-Pro.jpg',
        isPrimary: true,
        products_id:'27',
      },

      {
        url: 'Mi13-Lite.jpg',
        isPrimary: true,
        products_id:'28',
      },
      
      {
        url: 'note12ProP.jpeg',
        isPrimary: true,
        products_id:'29',
      },

      {
        url: 'Poco-X4gt.jpg',
        isPrimary: true,
        products_id:'30',
      },

      {
        url: 'Poco-X4Pro.jpg',
        isPrimary: true,
        products_id:'31',
      },

      {
        url: 'Poco-X5.jpg',
        isPrimary: true,
        products_id:'32',
      },
      {
        url: 'POCO-X5Pro.jpg',
        isPrimary: true,
        products_id:'33',
      },

      {
        url: 'Redmi-N10-Pro.jpg',
        isPrimary: true,
        products_id:'34',
      },
      {
        url: 'Redmi-N10S.jpg',
        isPrimary: true,
        products_id:'35',
      },

      {
        url: 'Redmi-N11.jpg',
        isPrimary: true,
        products_id:'36',
      },
      {
        url: 'Redmi-N11-Pro.jpg',
        isPrimary: true,
        products_id:'37',
      },

      {
        url: 'Redmi-N11-ProPlus.jpg',
        isPrimary: true,
        products_id:'38',
      },
      
      {
        url: 'p30L.jpg',
        isPrimary: true,
        products_id:'39',
      },

      {
        url: 'p10.jpg',
        isPrimary: true,
        products_id:'40',
      },

      {
        url: 'p9.png',
        isPrimary: true,
        products_id:'41',
      },

      {
        url: 'y9.jpg',
        isPrimary: true,
        products_id:'42',
      },
      {
        url: 'y5.jpg',
        isPrimary: true,
        products_id:'43',
      },

      {
        url: 'monitor32.jpg',
        isPrimary: true,
        products_id:'44',
      },
      {
        url: 'galaxyBook.jpg',
        isPrimary: true,
        products_id:'45',
      },

      {
        url: 'mackBookAir.jpg',
        isPrimary: true,
        products_id:'46',
      },
      {
        url: 'SmartbookA.jpg',
        isPrimary: true,
        products_id:'47',
      },

      {
        url: '240G7.jpg',
        isPrimary: true,
        products_id:'48',
      },
      
      {
        url: 'pavilionG4.jpg',
        isPrimary: true,
        products_id:'49',
      },

      {
        url: 'ideaPad330.jpg',
        isPrimary: true,
        products_id:'50',
      },

      {
        url: 'smartPadA.jpg',
        isPrimary: true,
        products_id:'51',
      },

      {
        url: 'ipadAir5.jpg',
        isPrimary: true,
        products_id:'52',
      },
      {
        url: 'ipadMini6.jpg',
        isPrimary: true,
        products_id:'53',
      },

      {
        url: 'tabP12Pro.jpg',
        isPrimary: true,
        products_id:'54',
      },
      {
        url: 'yoga13.jpeg',
        isPrimary: true,
        products_id:'55',
      },

      {
        url: 'manillaWatch.png',
        isPrimary: true,
        products_id:'56',
      },
      {
        url: 'protectorAirpods.png',
        isPrimary: true,
        products_id:'57',
      },

      {
        url: 'popSocket.jpg',
        isPrimary: true,
        products_id:'58',
      },
      
      {
        url: 'soporteCarro.jpg',
        isPrimary: true,
        products_id:'59',
      },

      {
        url: 'cableUsb.jpg',
        isPrimary: true,
        products_id:'60',
      },

      {
        url: 'marranito.jpg',
        isPrimary: true,
        products_id:'61',
      },

      {
        url: 'cargadorIphone.jpg',
        isPrimary: true,
        products_id:'62',
      },
      {
        url: 'cargadorMgsafe.jpg',
        isPrimary: true,
        products_id:'63',
      },

      {
        url: 'cargadorFastSamsg.jpg',
        isPrimary: true,
        products_id:'64',
      },
      {
        url: 'cargadorTipoC.jpg',
        isPrimary: true,
        products_id:'65',
      },

      {
        url: 'powerBankAOrigin.jpg',
        isPrimary: true,
        products_id:'66',
      },
      {
        url: 'airpods2.jpg',
        isPrimary: true,
        products_id:'67',
      },

      {
        url: 'airpods3.png',
        isPrimary: true,
        products_id:'68',
      },
      
      {
        url: 'airpodsPro.jpg',
        isPrimary: true,
        products_id:'69',
      },

      {
        url: 'earpods.jpg',
        isPrimary: true,
        products_id:'70',
      },

      {
        url: 'watchSE.jpg',
        isPrimary: true,
        products_id:'71',
      },

      {
        url: 'watch8.jpg',
        isPrimary: true,
        products_id:'72',
      },
      {
        url: 'watchUltra.jpg',
        isPrimary: true,
        products_id:'73',
      },

      {
        url: 'redmiAirdots.jpg',
        isPrimary: true,
        products_id:'74',
      },
      {
        url: 'i12.jpg',
        isPrimary: true,
        products_id:'75',
      },

      {
        url: 'galaxyBuds2.jpeg',
        isPrimary: true,
        products_id:'76',
      },
      {
        url: '',
        isPrimary: true,
        products_id:'',
      },

      {
        url: '',
        isPrimary: true,
        products_id:'',
      },
      
      {
        url: '',
        isPrimary: true,
        products_id:'',
      },

      
      

      
    

    ], 
    
    {});

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('products_images', null, {});

  }
};
