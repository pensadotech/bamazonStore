// API-Routes 
module.exports = (app) => {  
  require('./departmentRoutes')(app)
  require('./productRoutes')(app)
  require('./orderRoutes')(app)
}