import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Grupo from '../app/models/Grupo';
import Usuario from '../app/models/Usuario';
const models = [Grupo, Usuario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map((model) => model.init(this.connection))
            .map((model) => {
                if (model.associate) model.associate(this.connection.models);
                return model;
            })
    }
}

export default new Database();