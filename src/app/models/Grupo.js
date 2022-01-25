import Sequelize, { Model } from "sequelize";

class Grupo extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING(100)
        }, {
            sequelize,
            tableName: 'grupo',
        });

        return this;
    }
}

export default Grupo