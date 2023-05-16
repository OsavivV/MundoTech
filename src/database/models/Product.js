'use strict';

module.exports = (sequelize, dataTypes) => {
  let alias = 'Product';
  let cols ={
      
   id: {
          type: dataTypes.INTEGER,
                autoIncrement: true ,
                primaryKey: true ,
                allowNull: false,  
          },
  
      name: {
          type: dataTypes.TEXT,
                allowNull: false
          },  
  
      description: {
          type: dataTypes.TEXT,
                allowNull: false
          },
  
      processor: {
          type: dataTypes.STRING(50),
                allowNull: false
          }, 
  
      ram: {
          type: dataTypes.STRING(20),
                allowNull: false
          },
  
      memory: {
          type: dataTypes.STRING(20),
                allowNull: false
          },
  
      status: {
          type: dataTypes.STRING(20),
                allowNull: false
          }, 
  
      discount: {
          type: dataTypes.STRING(20),
                allowNull: false
          },

      purchasePrice: {
          type: dataTypes.DECIMAL(11, 10),
                allowNull: false
          },

      salePrice: {
          type: dataTypes.DECIMAL(11, 10),
                allowNull: false
          },

      categories_id: {
          type: dataTypes.INTEGER,
                references: {
                    model:'categories',
                    key: 'id'
                        }
      },
      brands_id: {
          type: dataTypes.INTEGER,
                references: {
                    model:'brands',
                    key: 'id'
                        }
      },
    //   buys_id: {
    //     type: dataTypes.INTEGER,
    //           references: {
    //               model:'buys',
    //               key: 'id'
    //       }  
    // },
          
          }   
  
  let config = {
  
          tableName: "products",
          timestamps: false
  };
  
  const Product = sequelize.define (alias, cols, config)
  
  return Product;
  
  }