const createTechnology = require('../services/DBdata/create/createTechnology')

const postTechnology = async (name, image) => {
  if (!name || !image) throw Error('Data is missing')

  const newTechnology = createTechnology(name, image)

  return newTechnology
}

module.exports = postTechnology
