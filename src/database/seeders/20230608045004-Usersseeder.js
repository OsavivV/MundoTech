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
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Saviv',
        LastName: 'Vivas',
        email: 'oklan002blog@gmail.com',
        password: 'Fundebas002',
        avatar: 'profile.jpg',
        roles_id: 1
      },
      {
        firstName: 'Sebastian Camilo',
        LastName: 'Puerto Araque',
        email: 'Secapuar@hotmail.com',
        password: '472316',
        avatar: 'profile.jpg',
        roles_id: 1
      },
      {
        firstName: 'Rossmary',
        LastName: 'Rodriguez Mesa',
        email: 'Ross24@gmail.com',
        password: 'Test12345*',
        avatar: 'profile.jpg',
        roles_id: 2
      },

      {
        firstName: 'Laura Coromoto',
        LastName: 'Joves Sandoval',
        email: 'Jovesjoves74@gmail.com',
        password: 'Test12345*',
        avatar: 'profile.jpg',
        roles_id: 2
      },

      {
        firstName: 'Michael ',
        LastName: 'Koologi',
        email: 'MichaelKolCanada@bellsouth.net',
        password: 'Englishpass12345',
        avatar: 'profile.jpg',
        roles_id: 3
      },
      
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
