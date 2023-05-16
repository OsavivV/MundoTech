
module.exports = (sequelize, dataTypes) => {

    let alias = 'Product_images';
    let cols ={
        
      id: {
          type: dataTypes.INTEGER,
                autoIncrement: true ,
                primaryKey: true ,
                allowNull: false,  
            },
  
      url: {
          type: dataTypes.INTEGER,
                allowNull: false
            }, 
    
      isPrimary: {
          type: dataTypes.BOOLEAN,
                allowNull: false
            },
    
      products_id: {
        type: dataTypes.INTEGER,
          references: {
            model:'products',
            key: 'id'
          }
      },    
            }   
    
    let config = {
    
            tableName: "products_images",
            timestamps: false
    };
    
    const Product_images = sequelize.define (alias, cols, config)
    
    return Product_images;
    
  }