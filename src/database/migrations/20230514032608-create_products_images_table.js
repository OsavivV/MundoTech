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
    await queryInterface.createTable('products_images', { 
      id: {
        type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull: false
      },
      url: {
        type: Sequelize.TEXT,
              allowNull: false
      },
      isPrimary: {
        type: Sequelize.BOOLEAN,
              allowNull: false
      },
      products_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'products',
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
    await queryInterface.dropTable('products_images');
  }
};
