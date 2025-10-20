import * as repoLivros from "../repositories/livrosRepository.js"
import { getAuthentication } from '../utils/jwt.js'
import { Router } from "express";

const endpoints = Router();
const autenticador = getAuthentication();

endpoints.get('/livros', autenticador, async (req, resp) => {
    try {
        let consultar = await repoLivros.checarLivros();
        resp.send(consultar);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;