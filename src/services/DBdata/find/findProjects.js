const { Project, Technology } = require('../../../db')

const findProjects = async () => {
  return await Project.findAll(/* {
    include: {
      model: Technology,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  } */)
}

module.exports = findProjects
