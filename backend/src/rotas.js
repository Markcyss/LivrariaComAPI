import livrosController from './controller/livrosController.js'
import loginController from './controller/loginController.js'

export function adicionarRotas(api) {
    api.use(livrosController);
    api.use(loginController);
}