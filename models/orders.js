// Order Model
module.exports = (sequelize, DataTypes) => {

  let Order = sequelize.define('orders', {
    Client: DataTypes.STRING,
    PurchaseDate: DataTypes.DATE,
    StockQty: DataTypes.INTEGER
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

   // Provide point for associations 
   Order.associate = (db) => {
    // Orders has one-to-many relationship with Order-Items
    db.orders.hasMany(db.orderitems,{as: 'Orderitems'})
  }

  return Order
}