const Sequelize = require('sequelize');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const Roof = sequelize.define('Roof', {
    system_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

sequelize.sync()
    .then(() => console.log('Roof table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = Roof;