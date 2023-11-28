const { Project } = require('../../../db')

const createProject = async (
  name,
  description,
  image,
  link,
  repository,
  technologiesName
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
  await newProject.addTechnologies(technologiesName)
  return newProject
}

module.exports = createProject
