const { Technology } = require('../../../db')

const updateTechnology = async (id, name, image) => {
  const [updatedTechnology] = await Technology.update(
    { name, image },
    { where: { id }, returning: true }
  )

  return updatedTechnology
}

module.exports = updateTechnology
