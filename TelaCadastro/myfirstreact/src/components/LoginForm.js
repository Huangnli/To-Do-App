import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginForm({ Cadastro, error }) {
    const [details, setDetails] = useState({ email: "", password: "", passwordCheck: ""});

    const submitHandler = e => {
        e.preventDefault();

        Cadastro(details);
    }
    return (
        <form onSubmit={submitHandler} autoComplete="off">
            <div className="form-inner">
                <h2>Crie sua conta</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">

                    <div class="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={details.email}
                            onChange={e => setDetails({ ...details, email: e.target.value })}
                        />
                    </div>

                    <div class="input-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={details.password}
                            onChange={e => setDetails({ ...details, password: e.target.value })}
                        />
                    </div>
                    <div class="input-group">
                        <label htmlFor="passwordCheck">Senha:</label>
                        <input
                            type="password"
                            name="passwordCheck"
                            id="passwordCheck"
                            value={details.passwordCheck}
                            onChange={e => setDetails({ ...details, passwordCheck: e.target.value })}
                        />
                    </div>
                </div>
                <input type="submit" value="Cadastro" />

                <div class="form-group">
                    <a>Já possui uma conta? </a>
                    <Link to='/Login'>
                        <a>Faça o login</a>
                    </Link>
                </div>
            </div>
        </form>
    )
}


//     return (
//         <form onSubmit={submitHandler} autoComplete="off">
//             <div className="form-inner">
//                 <h2>Login</h2>
//                 {(error != "")? (<div className="error">{error}</div>) : ""}
//                 <div className="form-group">
//                     <input type="text" name="name" id="name" onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
//                     <label htmlFor="name">Nome:</label>
//                 </div>
//                 <div className="form-group">
//                     <input type="email" name="email" id="email" onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
//                     <label htmlFor="email">Email:</label>
//                 </div>
//                 <div className="form-group">
//                     <input type="password" name="password" id="password" onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
//                     <label htmlFor="password">Senha:</label>
//                 </div>
//                 <div className="form-group">
//                     <input type="submit" value="Login"/>
//                 </div>
//             </div>
//         </form>
//     )
// }

export default LoginForm;
