const server = require('./src/server')
const { conn } = require('./src/db')
const PORT = 3001
const boolean = !true

conn
  .sync({ force: boolean, alter: !boolean })
  .then(() => server.listen(PORT, () => console.log('Server listening on port', PORT)))
  .catch(error => console.log(error))
