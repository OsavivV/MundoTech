'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

await queryInterface.createTable('buys', {
    id: {
        type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
      },
    name: {
        type: Sequelize.TEXT,
              allowNull: false,
      },
    description: {
        type: Sequelize.STRING
      },
    dateOfPurchase: {
        type: Sequelize.DATE,
              allowNull: false,
      },
    total: {
        type: Sequelize.DOUBLE,
              allowNull: false,
      },
    status: {
        type: Sequelize.STRING(20),
              
      },
    
    });
  },
  async down(queryInterface, Sequelize) {

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('buys');
  }
};