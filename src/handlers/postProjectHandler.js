const postProject = require('../controllers/postProject')

module.exports = async (req, res) => {
  try {
    const { name, description, image, link, repository, technologiesId } = req.body
    const response = await postProject(name, description, image, link, repository, technologiesId)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
