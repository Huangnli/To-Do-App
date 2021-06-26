import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/auth';

import AuthTextField from '../components/AuthTextField';
import Button from '../components/Button';

import logo from '../imagem/logo.svg';

import { Link } from 'react-router-dom'

import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  async function handleLogin() {
    if (email && password) {
      await signIn(email, password);
      history.push("/dashboard");
    }
  }

  return (
    <div className="TelaDeLogin">
      <div className="Informacao">
        <div>
          <div className="logo-login">
            <img src={logo} alt="Logo" />
          </div>
          <div className="Descricao">
            <p >Crie listas e organize suas tarefas dinamicamente.</p>
          </div>
        </div>
        <img className="arte" src="/arte_login.png" alt="Duas pessoas segurando suas listas" />
      </div>
      <div className="login-box">
        <div className="login-group">
          <div className='login-titulo'>
            <h1 className="title">Login</h1>
          </div>
          <AuthTextField
            placeholder={"Email"}
            value={email}
            type={"email"}
            onChange={setEmail}
            onPressEnter={handleLogin}
          />
          <AuthTextField
            placeholder={"Password"}
            value={password}
            type={"password"}
            onChange={setPassword}
            onPressEnter={handleLogin}
          />
          <Button
            className={"btn--auth"}
            children={"Entrar"}
            type={"submit"}
            onClick={() => handleLogin()}
          />
        </div>

        <div className="registrar">
          <a>Não possui uma conta? </a>
          <Link to='/Register'>
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
