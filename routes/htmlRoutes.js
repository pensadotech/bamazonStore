const path = require('path')

// HTML-Routes
module.exports = (app) => {
  
  // Department HTML routes 
  app.get('/depmts', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/index.html'))
  })

  app.get('/depmts-add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptAdd.html'))
  })
  
  app.get('/depmts-edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptEdit.html'))
  })

  app.get('/depmts-delete', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/departments/deptDelete.html'))
  })

  

} // module.exports