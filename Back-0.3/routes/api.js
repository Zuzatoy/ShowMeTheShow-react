const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/getSeries', (req, res) => {
  db.getSchedule()
    .then(schedule => {
      res.json({schedule: schedule})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
})

module.exports = router
