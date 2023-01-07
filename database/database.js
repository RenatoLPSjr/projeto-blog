const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','root','38242628',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;