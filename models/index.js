const { Sequelize } = require('sequelize');
const { user } = require('./user.model');

const db = {};
const sequelize = new Sequelize('test', 'hoang', 'example', {
	host: 'localhost',
	port: '5432',
	dialect: 'postgres',
});

db.sequelize = sequelize;
db.User = user(sequelize);

/*
db :{
    sequelize : sequelize
}
*/

module.exports = db;
