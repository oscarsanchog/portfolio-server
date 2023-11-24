const { Router } = require('express')
const technologiesRouter = Router()

const getTechnologiesHandler = require('../handlers/getTechnologiesHandler')
const postTechnologiesHandler = require('../handlers/postTechnologiesHandler')
const putTechnologyHandler = require('../handlers/putTechnologyHandler')

technologiesRouter
  .get('/', getTechnologiesHandler)
  .post('/', postTechnologiesHandler)
  .put('/:id', putTechnologyHandler)

module.exports = technologiesRouter
