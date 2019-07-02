const fs = require('fs')
const path = require('path')
const config = require('../config/config')
const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
);

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return file !== 'index.js'
    })
    .forEach((file) => {
        // create db tables for each defined model file
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequilize = Sequelize

module.exports = db;