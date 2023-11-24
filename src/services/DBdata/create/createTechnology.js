const { Technology } = require('../../../db')

const createTechnology = async (name, image) => Technology.findOrCreate({ where: { name, image } })

module.exports = createTechnology
