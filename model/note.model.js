const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define('note', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        }
    })

    return Note;
};