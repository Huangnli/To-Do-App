import { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom'

import { isAuthenticated, registerUser } from '../services/auth';

import AuthTextField from '../components/AuthTextField';
import Button from '../components/Button';

import './Register.css';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (isAuthenticated())
    return <Redirect to="/dashboard" />;

  async function handleRegister() {
    if (name && email && password && confirmPassword)
    {
      await registerUser(name, email, password);
      history.push("/dashboard");
    }
  }

  return (
    <div className="register-page">
      <div className="form-register">
        <h2>Crie sua conta</h2>

        <div className="form-group">
          <AuthTextField
            placeholder={"Nome"}
            value={name}
            type={"text"}
            onChange={setName}
            onPressEnter={handleRegister}
          />
          <AuthTextField
            placeholder={"Email"}
            value={email}
            type={"email"}
            onChange={setEmail}
            onPressEnter={handleRegister}
          />

          <AuthTextField
            placeholder={"Senha"}
            value={password}
            type={"password"}
            onChange={setPassword}
            onPressEnter={handleRegister}
          />
          <AuthTextField
            placeholder={"Confirme sua senha"}
            value={confirmPassword}
            type={"password"}
            onChange={setConfirmPassword}
            onPressEnter={handleRegister}
          />
          <Button
            className={"btn--auth"}
            children={"Criar conta"}
            type={"submit"}
            onClick={() => handleRegister()}
          />
        </div>

        <div className="register-footer">
            Já possui uma conta?
          <Link className="link-to" to='/Login'>
            Faça o login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
