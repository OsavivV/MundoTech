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
          },
  
      processor: {
          type: dataTypes.STRING(50),
          }, 
  
      ram: {
          type: dataTypes.STRING(20),
          },
  
      memory: {
          type: dataTypes.STRING(20),
          },
  
      status: {
          type: dataTypes.STRING(20),
                allowNull: false
          }, 
  
      discount: {
          type: dataTypes.STRING(20),
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
               
      },
      brands_id: {
          type: dataTypes.INTEGER,
                
      },

          
          }   
  
  let config = {
  
          tableName: "products",
          timestamps: false
  };
  
  const Product = sequelize.define (alias, cols, config)
  
    Product.associate = function(models) {

        Product.belongsTo(models.Category, {
                as: "categories",
                foreignKey: "categories_id"
            });

        Product.belongsTo(models.Brand, {
                as: "brands",
                foreignKey: "brands_id"
            });

        Product.hasMany(models.Product_images, {
                as: "product_images",
                otherKey: "image_id",
                timestamps: false
        });

        Product.belongsToMany(models.Color, {
            as: "color",
            through: "product_has_colors",
            foreignKey: "products_id",
            otherKey: "colors_id",
            timestamps: false
        });
    }

  return Product;
  
  }