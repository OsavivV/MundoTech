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
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      processor: {
        type: Sequelize.STRING(50),
              allowNull: false
      },
      ram: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      memory: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      status: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      discount: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(11, 10),
              allowNull: false
      },
      categories_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'categories',
            key: 'id'
          }
      },
      brand_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'brands',
            key: 'id'
          }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
