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
    await queryInterface.createTable('product_has_colors', { 
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'products',
          key: 'id'
        },
        onDelete:'CASCADE'

      },
      colors_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'colors',
          key: 'id'
        },
        onDelete:'CASCADE'

      }
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     * 
     */
    await queryInterface.dropTable('product_has_colors');
  }
};
