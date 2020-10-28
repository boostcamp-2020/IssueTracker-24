const Sequelize = require('sequelize');

const config = require(`${__dirname}/../config/index`).db;
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.Issue = require('./issue')(sequelize, Sequelize.DataTypes);
db.Comment = require('./comment')(sequelize, Sequelize.DataTypes);
db.CommentImage = require('./comment-image')(sequelize, Sequelize.DataTypes);
db.IssueImage = require('./issue-image')(sequelize, Sequelize.DataTypes);
db.Label = require('./label')(sequelize, Sequelize.DataTypes);
db.Milestone = require('./milestone')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
