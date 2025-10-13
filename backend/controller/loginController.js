import * as repoLogin from '../repositories/loginRepository.js';
import { generateToken } from '../utils/jwt.js'

import { Router } from "express";
const endpoints = Router();

endpoints.post("/login/conta", async (req, resp) => {
    let novoLogin = req.body;

    let id = await repoLogin.criarConta(novoLogin);
    resp.send({ novoId: id });
})

endpoints.post("/login/logar", async (req, resp) => {
    let usuario = req.body.usuario;
    let senha = req.body.senha;

    let credenciais = await repoLogin.consultarCredenciais(usuario, senha);
    
    if (!credenciais) {
        resp.status(401).send({
          erro: 'Credenciais inválidas.'
        });
    }
    else {
        resp.send({
            token: generateToken(credenciais)
        });
    }
})
    
export default endpoints;