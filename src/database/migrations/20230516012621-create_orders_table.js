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

await queryInterface.createTable('orders', {
    id: {
        type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
      },
    orderDate: {
        type: Sequelize.DATE,
              allowNull: false,
      },
    total: {
        type: Sequelize.DOUBLE,
              allowNull: false,
      },
    users_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'users',
            key: 'id'
          }
      }
    
    });
  },
  async down(queryInterface, Sequelize) {

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('orders');
  }
};