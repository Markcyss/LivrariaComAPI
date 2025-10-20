import { conection } from "./connection.js";
import crypto from 'crypto-js';

export async function criarConta(novoLogin) {
    const comando = `
        insert into login(usuario, senha)
            values
            (?, ?);
    `;
    let hash = crypto.SHA256(novoLogin.senha).toString();

    const [info] = await conection.query(comando, [
        novoLogin.usuario,
        hash
    ]) 
    return info.insertId;
}

export async function consultarCredenciais(novoLogin) {
    const comando = `
        select  
            id,
            usuario
            from login
            where usuario = ? 
            and senha = ?;
    `;

    let hash = crypto.SHA256(novoLogin.senha)

    const [registros] = await conection.query(comando, [novoLogin.usuario, hash])
    return registros[0];
}