import React, { Component } from 'react'
import '../css/index.css';
import '../css/login.css';
import logo from '../imagem/logo.svg';
import arte1 from '../imagem/arte1.svg';
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className='TelaDeLogin'>
                <div className='Informacao'>
                    <div>
                        <div className='logo'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='Descricao'>
                            <a>Crie listas e organize suas tarefas dinamicamente.</a>
                        </div>
                    </div>
                    <div className='arte1'>
                        <img src={arte1} alt="Arte 1" />
                    </div>
                </div>

                <div className='login'>
                    <div className="login-group">
                    <div className='login-titulo'>
                        <h2>Login</h2>
                    </div>
                        <div class="input-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                            // value={details.email}
                            // onChange={e => setDetails({ ...details, email: e.target.value })}
                            />
                        </div>

                        <div class="input-group">
                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                            // value={details.password}
                            // onChange={e => setDetails({ ...details, password: e.target.value })}
                            />
                        </div>

                        <button>Entrar</button>
                    </div>

                    <div className="registrar">
                        <a>Não possui uma conta? </a>
                        <Link to='/'>
                            <a>Registre-se</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;