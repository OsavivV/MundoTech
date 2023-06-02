module.exports = (sequelize, dataTypes) => {
let alias = 'User';
let cols ={
    
    id: {
        type:   dataTypes.INTEGER(10),
                autoIncrement: true ,
                primaryKey: true ,
                allowNull: false,  
        },

    firstName: {
        type:   dataTypes.TEXT,
                allowNull: false
        },  

    lastName: {
        type:   dataTypes.TEXT,
                allowNull: false
        },

    email: {
        type:   dataTypes.TEXT,
                allowNull: false
        }, 

    password: {
        type:   dataTypes.TEXT,
                allowNull: false
        },

    roles_id: {
        type:   dataTypes.INTEGER(10),
                    references: {
                        model:'roles',
                        key: 'id'
            }
        }     
    }

let config = {

        tableName: "users",
        timestamps: false
};

const User = sequelize.define (alias, cols, config)

    User.associate = function(models) {
        User.belongsTo(models.Rol, {
            as: "roles",
            foreignKey: "roles_id"
        });
    }

return User;

}