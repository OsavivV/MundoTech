module.exports = (sequelize, dataTypes) => {
  let alias = 'Rol';
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
      }
  
  let config = {
          tableName: "roles",
          timestamps: false
  };
  
  const Rol = sequelize.define(alias, cols, config)
  
  return Rol;
  
}