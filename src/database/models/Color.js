module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        
        id: {
            type:dataTypes.INTEGER,
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
    
            tableName: "colors",
            timestamps: false
    };
    
const Color= sequelize.define(alias, cols, config)
    
        Color.associate = function(models) {
            Color.belongsToMany(models.Product, {
                as: "product",
                through: "product_has_colors",
                foreignKey: "colors_id",
                otherKey: "products_id",
                timestamps: false
            });
        }
    
    return Color;
    
    }