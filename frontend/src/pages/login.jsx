import './login.scss';

export default function Login () {
    return(
        <div className="container-login">

            <div className='caixa'>
                <h1>Usuario</h1>               
                <input placeholder="Aluno" />
            </div>
            <div className='caixa'>
                <h1>Senha</h1>
                <input placeholder="Senha" />
            </div>
            <div className='caixa2'>
                <div className='botao'>
                    <p>Entrar</p>
                </div>
            </div>
            
        </div>
    ) 
}