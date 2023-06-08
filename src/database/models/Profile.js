module.exports = (sequelize, dataTypes) => {
let alias = 'Profile';
let cols ={
    
    id: {
        type:   dataTypes.INTEGER,
                autoIncrement: true ,
                primaryKey: true ,
                allowNull: false,  
        },

    phoneNumber: {
        type:   dataTypes.STRING(20),
                allowNull: false
        },

    avatar: {
            type: dataTypes.TEXT,
            allowNull: false,
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
        
    users_id: {
        type:   dataTypes.INTEGER,
           
        }
    }

let config = {

        tableName: "profiles",
        timestamps: false
};

const Profile = sequelize.define (alias, cols, config)

    Profile.associate = function(models) {

        Profile.belongsTo(models.User, {
            as: "users",
            foreignKey: "profiles_id",
        });
    }

return Profile;

}