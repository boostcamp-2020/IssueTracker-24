const Sequelize = require('sequelize');

const config = require(`${__dirname}/../config/index`);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
