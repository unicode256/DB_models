const Sequelize = require('sequelize');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const Disks = sequelize.define('Disks', {
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
    .then(() => console.log('Disks  table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = Disks;