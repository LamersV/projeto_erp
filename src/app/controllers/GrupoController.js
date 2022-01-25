import Grupo from "../models/Grupo";

class GrupoController {
    async store(req, res) {
        const grupo = await Grupo.create(req.body);
        return res.json(grupo)
    }
    async index(req, res) {
        const grupos = await Grupo.findAll();
        return res.json(grupos)
    }
    async update(req, res) {
        let grupo = await Grupo.findByPk(req.params.id)
        grupo = await grupo.update(req.body)
        return res.json(grupo)
    }
    async delete(req, res) {
        let grupo = await Grupo.findByPk(req.params.id)
        grupo = await grupo.destroy(req.body)
        return res.json(grupo)
    }
    async show(req, res) {
        let grupo = await Grupo.findByPk(req.params.id)
        return res.json(grupo)
    }
}

export default new GrupoController();