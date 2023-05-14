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
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Celulares'
      },
      {
        name: 'Computadores'
      },
      {
        name: 'Tablets'
      },
      {
        name: 'Monitores'
      },
      {
        name: 'Consolas'
      },
      {
        name: 'Cables'
      },
      {
        name: 'Gadgets'
      },
      {
        name: 'Adaptadores'
      },
      {
        name: 'Accesorios'
      }], 
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};