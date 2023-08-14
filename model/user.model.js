const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING 
        },
        password: {
            type: Sequelize.STRING
        }
    });


    return User;
};