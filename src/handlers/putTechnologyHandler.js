const putTechnology = require('../controllers/putTechnology')

module.exports = async (req, res) => {
  try {
    const { name } = req.params
    const { image } = req.body
    const response = await putTechnology(name, image)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
