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
              primaryKey: true,
              allowNull: false
      },
    name: {
        type: Sequelize.TEXT,
              allowNull: false
      },
    description: {
        type: Sequelize.TEXT,
      },
    processor: {
        type: Sequelize.STRING(50),
      },
    ram: {
        type: Sequelize.STRING(20),
      },
    memory: {
        type: Sequelize.STRING(20),
      },
    status: {
        type: Sequelize.STRING(20),
              allowNull: false
      },
    discount: {
        type: Sequelize.STRING(20),
      },
    purchasePrice: {
        type: Sequelize.INTEGER,
              allowNull: false
        },
        
    salePrice: {
        type: Sequelize.INTEGER,
              allowNull: false
        },

    categories_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'categories',
            key: 'id'
          }
      },
    brands_id: {
        type: Sequelize.INTEGER,
          references: {
            model:'brands',
            key: 'id'
          }
      },
    // buys_id: {
    //     type: Sequelize.INTEGER,
    //       references: {
    //         model:'buys',
    //         key: 'id'
    //       }
    //   },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products');
  }
};
