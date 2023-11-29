const findProjects = require('../services/DBdata/find/findProjects')

const getProjects = async () => {
  const projects = findProjects()

  return projects
}

module.exports = getProjects
