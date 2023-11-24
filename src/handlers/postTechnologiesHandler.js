const postTechnology = require('../controllers/postTechnology')

module.exports = async (req, res) => {
  try {
    const { name, image } = req.body
    const response = await postTechnology(name, image)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
