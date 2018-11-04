// Product Model
module.exports = (sequelize, DataTypes) => {

  let Product = sequelize.define('products', {
    Name: DataTypes.STRING,
    invenntory: DataTypes.STRING,
    description: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    StockQty: DataTypes.INTEGER,
    TotalSales: DataTypes.FLOAT
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  Product.associate = (db) => {
    // Product has one-to-many relationship with Order-Items
    db.products.hasMany(db.orderitems, {
      as: 'Orderitems'
    })
  }

  return Product
}