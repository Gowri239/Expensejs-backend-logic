const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenses', 'root', 'KKkg@2329', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
