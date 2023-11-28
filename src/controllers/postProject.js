const createProject = require('../services/DBdata/create/createProject')

const postProject = async (
  name, 
  description, 
  image, 
  link, 
  repository, 
  technologiesName
) => {
  if (
    !name || 
    !description || 
    !link ||
    !image ||
    !technologiesName
  ) throw Error('Data is missing')

  // const formattedName = name.charAt(0).toUppercase()

  const newDriver = createProject(name, description, image, link, repository, technologiesName)

  return newDriver
}

module.exports = postProject
