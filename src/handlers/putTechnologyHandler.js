const putTechnology = require('../controllers/putTechnology')

module.exports = async (req, res) => {
  try {
    const { id } = req.params
    const { name, image } = req.body
    const response = await putTechnology(id, name, image)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
