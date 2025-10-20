import "./rodape.scss";

export default function Rodape() {
    return(
        <div className="rodape">
            <div className="linksrodape">
                <div className="card">
                    <img src="/logo.png"/>
                </div>
                <div className="card">
                    <h1 className="titulo">Contato</h1>
                    <p className="text">(11) 91234-5678</p>
                    <p className="text">livraria@frei.com.br</p>
                </div>
                <div className="card">
                    <h1 className="titulo">Desenvolvido por</h1>
                    <p className="text">Marcos Souza do Carmo</p>
                    <p className="text">João Pedro dos Santos Cezar</p>
                </div>
                <div className="card">
                    <h1 className="titulo">Turma</h1>
                    <p className="text">Informática A</p>
                </div>
            </div>
            <h1 className="titulo">2025 @ Instituto Nossa Senhora de Fátima</h1>
        </div>
    );
}