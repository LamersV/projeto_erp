import { Router } from 'express'
import GrupoController from './app/controllers/GrupoController'
import UsuarioController from './app/controllers/UsuarioController'
const routes = Router()

//Grupos
routes.get('/grupos', GrupoController.index) //GET - Consulta que não enviara informacoes
routes.get('/grupos/:id', GrupoController.show)
routes.post('/grupos', GrupoController.store) //POST - Incluir novos registros
routes.put('/grupos/:id', GrupoController.update) //PUT - Atualizar registro
routes.delete('/grupos/:id', GrupoController.delete) //DELETE - Excluir registro

//Usuarios
routes.get('/usuarios', UsuarioController.index)
routes.get('/usuarios/:id', UsuarioController.show)
routes.post('/usuarios', UsuarioController.store)
routes.put('/usuarios/:id', UsuarioController.update)
routes.delete('/usuarios/:id', UsuarioController.delete)

export default routes