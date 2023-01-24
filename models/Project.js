const Sequelize = require('sequelize')
const db = require('../db/connection')

const Project = db.define('job', {
  tittle:{
    type: Sequelize.STRING
  },
  description: {
    type:Sequelize.STRING
  },
  new_project: {
    type:Sequelize.INTEGER
  }
}) 

module.exports = Project