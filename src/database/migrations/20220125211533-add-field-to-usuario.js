'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn("usuario", "idgrupo", {
        type: Sequelize.INTEGER,
        references: { model: 'grupo', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
    }),

    down: (queryInterface) => queryInterface.removeColumn('usuario', 'idgrupo')
};