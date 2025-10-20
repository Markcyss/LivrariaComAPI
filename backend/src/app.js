import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { adicionarRotas } from './rotas.js';

const api = express();
api.use(cors());
api.use(express.json()); 

adicionarRotas(api);

api.listen(process.env.PORTA, () => console.log(`API subiu com sucesso na porta ${process.env.PORTA}!`));