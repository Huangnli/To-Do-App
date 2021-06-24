import React, { Component } from 'react'
import '../index.css';
import '../css/login.css';
import logo from '../imagem/logo.svg';
import arte1 from '../imagem/arte1.svg';

class Login extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Login;