import * as repoLogin from '../repositories/loginRepository.js';
import { generateToken } from '../utils/jwt.js'

import { Router } from "express";
const endpoints = Router();

endpoints.post("/login/conta", async (req, resp) => {
    let novoLogin = req.body;

    let id = await repoLogin.criarConta(novoLogin);
    resp.send({ novoId: id });

    try {
        let novoLogin = req.body;

        let id = await repoLogin.criarConta(novoLogin);
        resp.send({ novoId: id });
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post("/login/logar", async (req, resp) => {
    try {
        let novoLogin = req.body;
        let credenciais = await repoLogin.consultarCredenciais(novoLogin);
        
        if (!credenciais) {
            resp.status(401).send({
                erro: 'Credenciais inválidas.'
            })
        }
        else {
            resp.send({
                usuario: credenciais.usurio,
                token: generateToken(credenciais)
            });
        }
    }
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})
    
export default endpoints;