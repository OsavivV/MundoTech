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
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
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
      password: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      address: {
        type: Sequelize.STRING(70),
              allowNull: false
      },
      zipCode: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      roles_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'roles',
            key: 'id'
          }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
