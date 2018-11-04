// Order-Items Model
module.exports = (sequelize,DataTypes) => {

  let OrderItem = sequelize.define('orderitems', {
    Price: DataTypes.FLOAT,
    Qty: DataTypes.INTEGER,
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })
  
  // Provide point for associations 
  OrderItem.associate = (db) => {
    // Nothing
  }

  return OrderItem
}