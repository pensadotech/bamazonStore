// Department-Routes
const db = require('../models')

module.exports = (app) => {

  // find all
  app.get("/departments", (req, res) => {
    db.departments.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find one
  app.get('/departments/:name', (req, res) => {
    db.departments.findOne({
        where: {
          Name: req.params.name
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // create recaord
  app.post('/departments', (req, res) => {
    db.departments.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // update record
  app.put('/departments/:name', (req, res) => {
    db.departments.update(req.body, {
        where: {
          Name: req.params.name
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete one
  app.delete('/departments/:name', (req, res) => {
    db.departments.destroy({
        where: {
          Name: req.params.name
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete all
  app.departments('/departments', (req, res) => {
    db.departments.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

} // module.exports