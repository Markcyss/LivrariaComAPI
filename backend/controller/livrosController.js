import * as repoLivros from "../repositories/livrosRepository.js"
import { getAuthentication } from '../utils/jwt.js'
import { Router } from "express";

const endpoints = Router();
const autenticador = getAuthentication();

endpoints.get('/livros', autenticador, async (req, resp) => {
    let consultar = await repoLivros.checarLivros();
    resp.send(consultar);
})

export default endpoints;