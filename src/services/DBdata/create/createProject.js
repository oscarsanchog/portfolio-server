const { Project } = require('../../../db')

const createProject = async (
  name,
  description,
  image,
  link,
  repository,
  technologiesId
) => {
  const [newProject] = await Project.findOrCreate({
    where: {
      name,
      description,
      image,
      link,
      repository
    }
  })
  await newProject.addTechnologies(technologiesId)
  return newProject
}

module.exports = createProject
