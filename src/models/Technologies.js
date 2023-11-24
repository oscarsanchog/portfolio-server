const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Technology', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false })
}
