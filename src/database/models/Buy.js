
module.exports = (sequelize, dataTypes) => {

  let alias = 'Buy';
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
              llowNull: false
          },
  
    dateOfPurchase: {
        type: dataTypes.DATE,
              allowNull: false
          }, 
  
    total: {
        type: dataTypes.DOUBLE,
              allowNull: false
          },
  
    status: {
        type: dataTypes.STRING(20),

          }, 
    
    }   
  
  let config = {
  
          tableName: "buys",
          timestamps: false
  };
  
  const Buy = sequelize.define (alias, cols, config)
  
  return Buy;
  
  }