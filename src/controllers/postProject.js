const createProject = require('../services/DBdata/create/createProject')

const postProject = async (
  name, 
  description, 
  image, 
  link, 
  repository, 
  technologyId
) => {
  if (
    !name || 
    !description || 
    !link ||
    !image ||
    !technologyId
  ) throw Error('Data is missing')

  // const formattedName = name.charAt(0).toUppercase()

  const newDriver = createProject(name, description, image, link, repository, technologyId)

  return newDriver
}

module.exports = postProject
