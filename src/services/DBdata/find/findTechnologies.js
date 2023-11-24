const { Technology } = require('../../../db')

const findTechnologies = async () => await Technology.findAll()

module.exports = findTechnologies
