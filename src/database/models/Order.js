module.exports = (sequelize, dataTypes) => {

  let alias = 'Order';
  let cols ={
      
    id: {
        type: dataTypes.INTEGER,
              autoIncrement: true ,
              primaryKey: true ,
              allowNull: false,  
          },

    orderDate: {
        type: dataTypes.DATE,
              allowNull: false
          }, 
  
    total: {
        type: dataTypes.DOUBLE,
              allowNull: false
          },
  
    users_id: {
        type: dataTypes.INTEGER,
          references: {
            model:'users',
            key: 'id'
          }
      }    
          }   
  
  let config = {
  
          tableName: "orders",
          timestamps: false
  };
  
const Order = sequelize.define (alias, cols, config)

  Order.associate = function(models) {

    Order.belongsTo(models.User, {
            as: "users",
            foreignKey: "users_id"
        });
    }
  
  return Order;
  
}