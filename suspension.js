const Sequelize = require('sequelize');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const Suspension = sequelize.define('Suspension', {
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
    .then(() => console.log('Suspension table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = Suspension;