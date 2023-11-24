const { Router } = require('express')
const projectsRouter = Router()
const getProjectsHandler = require('../handlers/getProjectsHandler')
const postProjectHandler = require('../handlers/postProjectHandler')

projectsRouter
  .get('/', getProjectsHandler)
  .post('/', postProjectHandler)

module.exports = projectsRouter
