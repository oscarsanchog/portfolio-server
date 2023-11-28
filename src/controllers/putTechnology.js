const updateTechnology = require('../services/DBdata/update/updateTechnology')

const putTechnology = async (name, image) => {
  if (!name || !image) throw Error('Data is missing')

  const updatedTechnology = updateTechnology(name, image)

  return updatedTechnology
}

module.exports = putTechnology
