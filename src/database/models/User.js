'use strict';

module.exports = (sequelize, dataTypes) => {
let alias = 'User';
let cols ={
    
    id: {
        type:   dataTypes.INTEGER,
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
        type:   dataTypes.INTEGER,
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

return User;

}