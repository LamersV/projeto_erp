import Sequelize, { Model } from "sequelize";

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING(100),
            sigla: Sequelize.STRING(3),
            email: Sequelize.STRING(100)
        }, {
            sequelize,
            tableName: 'usuario'
        })

        return this
    }

    //Sempre que houver um relacionamento, adicionaremos esse associate para indicar com quem esse model se relaciona
    static associate(models) {

        this.belongsTo(models.Grupo, {

            foreignKey: 'idgrupo',
            as: 'grupo',
        })
    }
}

export default Usuario