'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('clients', { 
      id: {
        type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull:false
      },
      firstName: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      lastName: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      homeAddress: {
        type: Sequelize.STRING(70),
              allowNull: false
      },
      city: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      estate: {
        type: Sequelize.STRING(40),
              allowNull: false
      },
      country: {
        type: Sequelize.STRING(70),
              allowNull: false
      },
      zipCode: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('clients');
     */
    await queryInterface.dropTable('clients');
  }
};