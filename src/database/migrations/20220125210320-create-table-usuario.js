'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable("usuario", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        sigla: {
            type: Sequelize.STRING(3),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
    }),

    down: (queryInterface) => queryInterface.dropTable("usuario")
};