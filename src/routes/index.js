const { Router } = require('express')
const router = Router()
const projectsRouter = require('./projectsRouter')
const technologiesRouter = require('./technologiesRouter')

router
  .use('/projects', projectsRouter)
  .use('/technologies', technologiesRouter)

module.exports = router
