import { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { isAuthenticated, signIn } from '../services/auth';

import AuthTextField from '../components/AuthTextField';
import Button from '../components/Button';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  if (isAuthenticated())
    return <Redirect to="/dashboard" />;

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
            <img src="./logo.svg" alt="Logo" />
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
            placeholder={"Senha"}
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
          Não possui uma conta?
          <Link className='link-to' to='/Register'>
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
