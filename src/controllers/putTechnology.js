const updateTechnology = require('../services/DBdata/update/updateTechnology')

const putTechnology = async (id, name, image) => {
  if (!id || !name || !image) throw Error('Data is missing')

  const updatedTechnology = updateTechnology(id, name, image)

  return updatedTechnology
}

module.exports = putTechnology
