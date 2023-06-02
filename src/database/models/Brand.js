module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

        name: {
            type: dataTypes.TEXT,
            allowNull: false
        },
    }

    let config = {

        tableName: "brands",
        timestamps: false
    };

    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brands_id",
        });
    }

    return Brand;

}