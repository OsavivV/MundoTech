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
    await queryInterface.bulkInsert('brands', [
      {
        name: 'Xioami'
      },
      {
        name: 'Samsung'
      },
      {
        name: 'Realme'
      },
      {
        name: 'Apple'
      },
      {
        name: 'Huawei'
      },
      {
        name: 'Motorola'
      },
      {
        name: 'Tesla'
      },
      {
        name: 'Alcatel'
      },
      {
        name: 'Sony'
      },
      {
        name: 'JBL'
      },
      {
        name: 'Bose'
      },
      {
        name: 'Google'
      },
      {
        name: 'Amazon'
      },
      {
        name: 'Hp'
      },
      {
        name: 'Lenovo'
      },
      {
        name: 'Dell'
      },
      {
        name: 'Nintendo'
      },
      {
        name: 'Microsoft'
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
    await queryInterface.bulkDelete('brands', null, {});
  }
};
