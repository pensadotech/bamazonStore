// Products-Routes
const db = require('../models')

module.exports = (app) => {

  // find all
  app.get("/products", (req, res) => {
    db.products.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find one 
  app.get('/products/:name', (req, res) => {
    db.products.findOne({
        where: {
          Name: req.params.name
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // create record
  app.post('/products', (req, res) => {
    db.products.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // update record
  app.put('/products/:name', (req, res) => {
    db.products.update(req.body, {
        where: {
          Name: req.params.name
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete one
  app.delete('/products/:name', (req, res) => {
    db.products.destroy({
        where: {
          Name: req.params.name
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete all
  app.delete('/products', (req, res) => {
    db.products.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

} // module.exports