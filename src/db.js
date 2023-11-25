require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
// const { log } = require("console")
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env
console.log(DB_HOST)

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
)

const basename = path.basename(__filename)
const modelDefiners = []

fs.readdirSync(path.join(__dirname, 'models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => modelDefiners.push(require(path.join(__dirname, '/models', file))))

modelDefiners.forEach(model => model(sequelize))

const entries = Object.entries(sequelize.models)
const capsEntries = entries.map(entry => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Project, Technology } = sequelize.models

Project.belongsToMany(Technology, { through: 'Project_Technologies' })
Technology.belongsToMany(Project, { through: 'Project_Technologies' })

module.exports = {
  ...sequelize.models,
  conn: sequelize
}
