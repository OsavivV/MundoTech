module.exports = (sequelize, dataTypes) => {
  let alias = 'Category';
  let cols = {
      
      id: {
          type:   dataTypes.INTEGER,
                  autoIncrement: true ,
                  primaryKey: true ,
                  allowNull: false,  
          },
  
      name: {
          type:   dataTypes.TEXT,
                  allowNull: false
          }, 
      }
  
  let config = {
  
          tableName: "categories",
          timestamps: false
  };

  const Category = sequelize.define(alias, cols, config)

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "categories_id",
        });
    }   

  return Category;
  
}