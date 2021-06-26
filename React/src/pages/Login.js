import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/auth';

import AuthTextField from '../components/AuthTextField';
import Button from '../components/Button';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  async function handleLogin() {
    if (email && password)
    {
      await signIn(email, password);
      history.push("/dashboard");
    }
  }

  return (
    <div className="container">
      <div className="info">
          <img className="logo" src="./logo.png" alt="Logo" />
          <p className="desc">Crie listas e organize suas tarefas dinamicamente.</p>
          <img className="arte" src="/arte_login.png" alt="Duas pessoas segurando suas listas" />
      </div>
      <div className="main-box">
        <h1 className="title">Login</h1>
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
    </div>
  );
}

export default Login;
