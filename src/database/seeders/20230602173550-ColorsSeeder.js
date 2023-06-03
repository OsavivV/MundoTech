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
  await queryInterface.bulkInsert('colors', [

      {
        name: 'Blanco'
      },
      {
        name: 'Negro'
      },
      {
        name: 'Dorado'
      },
      {
        name: 'Azul'
      },
      {
        name: 'Plata'
      },
      {
        name: 'Gris'
      },
      {
        name: 'Rosa'
      },
      {
        name: 'Rojo'
      },
      {
        name: 'Amarillo'
      },
      {
        name: 'Verde'
      },
      {
        name: 'Manzana'
      },
      {
        name: 'Turquesa'
      },
      {
        name: 'Violeta'
      },
      {
        name: 'Vinotinto'
      },
      {
        name: 'Coral'
      },
      {
        name: 'Naranja'
      },
      {
        name: 'Purpura'
      },
      {
        name: 'Marron'
      },
      {
        name: 'Bronce'
      },
      {
        name: 'Celeste'
      },
      {
        name: 'Fucsia'
      },
      {
        name: 'Jade'
      },
      {
        name: 'Lila'
      },
      {
        name: 'Mandarina'
      },
      {
        name: 'Miel'
      },
      {
        name: 'Morado'
      },
      {
        name: 'Mostaza'
      },
      {
        name: 'Ocre'
      },
      {
        name: 'Salmon'
      },
      {
        name: 'Uva'
      },
      {
        name: 'Vainilla'
      },
      {
        name: 'Zafiro'
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

  await queryInterface.bulkDelete('colors', null, {});
  }
};
