const findProjects = require('../services/DBdata/find/findTechnologies')

const getProjects = async () => {
  const projects = findProjects()

  return projects
}

module.exports = getProjects
