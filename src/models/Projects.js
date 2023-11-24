const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Project', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT, // Cambiado a DataTypes.TEXT
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING
    },
    repository: {
      type: DataTypes.STRING
    }
  }, { timestamps: false })
}
