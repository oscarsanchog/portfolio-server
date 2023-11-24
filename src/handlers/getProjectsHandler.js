const getProjects = require('../controllers/getProjects')

module.exports = async (req, res) => {
  try {
    const response = await getProjects()
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
