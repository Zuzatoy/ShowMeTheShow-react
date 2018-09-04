const express = require('express')

const db = require('../db')

const router = express.Router()
router.use(express.json())

router.get('/signUp', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
})

router.get('/main/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
router.post('/main', (req, res) => {
  const user = req.body
  db.addUser(user)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
