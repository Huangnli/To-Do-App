import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App () {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }; 

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Cadastro = details =>{
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email
      });
    }
    else{
      console.log("You Shall Not Pass!");
      setError("You Shall Not Pass!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "")?(
        <div className="welcome">
          <h2>Welcome, <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Cadastro={Cadastro} error={error}/>
      )}

    </div>
  );
}

export default App;
