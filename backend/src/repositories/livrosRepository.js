import { conection } from "./connection.js";

export async function checarLivros() {
    const comando = `
        select*from livros
    `
    const [registros] = await conection.query(comando)
    return registros; 
}

