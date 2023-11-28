const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Technology', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false })
}
