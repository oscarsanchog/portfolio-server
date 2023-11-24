'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Projects', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  }
}
