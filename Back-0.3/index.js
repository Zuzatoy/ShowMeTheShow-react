const server = require('./server')

const port = 4000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
