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
    await queryInterface.createTable('profiles', { 
      id: {
        type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull:false
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      avatar: {
        type: Sequelize.TEXT,
        allowNull: false,
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
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'users',
          key:'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('clients');
     */
    await queryInterface.dropTable('profiles');
  }
};