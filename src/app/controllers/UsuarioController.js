import Usuario from "../models/Usuario";
import Grupo from "../models/Grupo";

class UsuarioController {
    async store(req, res) {
        const usuario = await Usuario.create(req.body);
        return res.json(usuario)
    }
    async index(req, res) {
        const usuarios = await Usuario.findAll({
            attributes: [
                'id', 'nome', 'sigla', 'email'
            ],
            include: [{
                model: Grupo,
                as: 'grupo'
            }]
        });
        return res.json(usuarios)
    }
    async update(req, res) {
        let usuario = await Usuario.findByPk(req.params.id)
        usuario = await usuario.update(req.body)
        return res.json(usuario)
    }
    async delete(req, res) {
        let usuario = await Usuario.findByPk(req.params.id)
        usuario = await usuario.destroy(req.body)
        return res.json(usuario)
    }
    async show(req, res) {
        let usuario = await Usuario.findByPk(req.params.id, {
            attributes: [
                'id', 'nome', 'sigla', 'email'
            ],
            include: [{
                model: Grupo,
                as: 'grupo'
            }]
        })
        return res.json(usuario)
    }
}

export default new UsuarioController();