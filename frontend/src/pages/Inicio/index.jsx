import { useState } from "react";
import { useNavigate } from "react-router";
import './index.scss'

export default function Inicio () {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("usuario");

        if (nomeUsuario == undefined || nomeUsuario == null) {
            navigate('/login');
        }
        else {
            setUsuario(nomeUsuario);
        }
    }, [])

    function sair() {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");

        navigate('/entrar');
    }

    async function listarLivros() {
        const resp = await api.get('/livros')
        setLivros(resp.data)
    }

    return (
        <div className="container-inicio">
            <h1>Inicio</h1>
            <h2>Bem vindo(a), {usuario}</h2>

        </div>
    );
}