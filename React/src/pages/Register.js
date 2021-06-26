import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/auth';

import AuthTextField from '../components/AuthTextField';
import Button from '../components/Button';

import { Link } from 'react-router-dom'

import '../css/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <div className="form-inner">
        <h2>Crie sua conta</h2>

        <div className="form-group">
          <AuthTextField
            placeholder={"Email"}
            value={email}
            type={"email"}
            onChange={setEmail}
          // onPressEnter={}
          />

          <AuthTextField
            placeholder={"Password"}
            value={password}
            type={"password"}
            onChange={setPassword}
          // onPressEnter={}
          />
          <AuthTextField
            placeholder={"passwordCheck"}
            value={password}
            type={"password"}
            onChange={setPassword}
          // onPressEnter={}
          />
          <Button
            className={"btn--auth"}
            children={"Criar conta"}
            type={"submit"}
          // onClick={}
          />
        </div>

        <div class="form-group">
          <a>Já possui uma conta? </a>
          <Link to='/Login'>
            Faça o login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
