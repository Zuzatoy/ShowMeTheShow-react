const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getSchedule
}

function getSchedule (testDb) {
  const db = testDb || connection
  console.log('getting all shows')
  return db('schedule').select()
}
