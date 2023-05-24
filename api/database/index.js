const Sequelize = require('sequelize');

const config = {
  dialect: 'sqlite',
  storage: './database.sqlite3',
};

const sequelize = new Sequelize(config);

module.exports = {
  sequelize,
  GlobalStat: require('./global-stat.model')(sequelize),
  KeyValue: require('./key-value.model')(sequelize),
};
