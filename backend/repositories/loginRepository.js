import { conection } from "./connection.js";

export async function criarConta(novoLogin) {
    const comando = `
        insert into login(usuario, senha)
            values
            (?, MD5(?));
    `;

    const [info] = await conection.query(comando, [
        novoLogin.usuario,
        novoLogin.senha
    ]) 
    return info.insertId;
}

export async function consultarCredenciais(usuario, senha) {
    const comando = `
        select  
            id,
            usuario
            from login
            where usuario = ? 
            and senha = MD5(?);
    `;

    const [registros] = await conection.query(comando, [usuario, senha])
    return registros[0];
}