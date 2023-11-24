const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server
  .use(morgan('dev'))
  .use(express.json())
  .use(cors())
  .use('/', router)
  .use('*', (req, res) => res.status(404).json({ error: 'Not found' }))

module.exports = server
