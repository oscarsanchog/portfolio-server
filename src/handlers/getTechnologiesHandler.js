const getTechnologies = require('../controllers/getTechnologies')

module.exports = async (req, res) => {
  try {
    const response = await getTechnologies()
    res.status(500).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
