import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { AuthContext, isAuthenticated } from '../providers/AuthProvider';

import AuthTextField from '../components/AuthTextField';
import Button from '../components/Button';

import './Register.css';

const Register = () => {
  const { registerUser, errorRegister } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let history = useHistory();

  if (isAuthenticated())
    history.push("/dashboard");

  async function handleRegister() {
    await registerUser(name, email, password, confirmPassword);

    if (errorRegister === null)
      history.push("/dashboard");
  }

  return (
    <div className="register-page">
      <div className="form-register">
        <h1>Crie sua conta</h1>

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

        { errorRegister !== null &&
          <ul className="errors">
            {
              Object.keys(errorRegister).map((key, index) =>
                <li value={key} key={index}>{errorRegister[key]}</li>
              )
            }
          </ul>
        }
      </div>
    </div>
  );
}

export default Register;
