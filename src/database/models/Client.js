'use strict';

module.exports = (sequelize, dataTypes) => {
let alias = 'Client';
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

    phoneNumber: {
        type:   dataTypes.STRING(20),
                allowNull: false
        },

    homeAddress: {
        type:   dataTypes.STRING(70),
                allowNull:false
        },
        
    city: {
        type:   dataTypes.STRING(20),
                allowNull: false
        },

    estate: {
        type:   dataTypes.STRING(40),
                allowNull:false
        },

    country: {
        type:   dataTypes.STRING(70),
                allowNull: false
        },

    zipCode: {
        type:   dataTypes.STRING(20),
                allowNull:false
        },    
    }

let config = {

        tableName: "clients",
        timestamps: false
};

const Client = sequelize.define (alias, cols, config)

return Client;

}