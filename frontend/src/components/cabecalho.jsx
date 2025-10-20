import { Link } from "react-router";
import "./cabecalho.scss";

export default function Cabecalho() {
    return(
        <div className="cabecalho">
            <img src="/logo.png"/>
            <h1 className="titulo">Livraria Frei</h1>
            <div className="naveg">
                <Link to='/'>Inicio</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
            
        </div>
    );
}