const findTechnologies = require('../services/DBdata/find/findTechnologies')

const getTechnologies = async () => {
  const technologies = findTechnologies()
  return technologies
}

module.exports = getTechnologies
