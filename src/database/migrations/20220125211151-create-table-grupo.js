'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable("grupo", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING(100),
        },
    }),

    down: (queryInterface) => queryInterface.dropTable("grupo")
};