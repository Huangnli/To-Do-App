import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../providers/AuthProvider';
import { ListsContext } from '../providers/ListsProvider';

import Button from '../components/Button';

import './Header.css';

const Header = ({ history }) => {
  const { signOut } = useContext(AuthContext);
  const { createList } = useContext(ListsContext);

  async function handleSignOut() {
    await signOut();
    history.push("/login");
  }

  return (
    <header>
      <div className="container">
        <div className="bar-left">
          <Link to="/">
            <img className="logo" src="/logo.png" alt="Logo" />
          </Link>
          <Button
            className={"btn--create-list"}
            children={"Criar lista"}
            type={"button"}
            onClick={createList}
          />
        </div>
        <div className="bar-right">
          <span className="material-icons icon-logout" onClick={() => handleSignOut()}>logout</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
