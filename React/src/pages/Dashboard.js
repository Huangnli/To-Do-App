import { Redirect, useHistory } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';
import { ListsProvider } from '../providers/ListsProvider';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Lists from '../components/Lists';

const Dashboard = () => {
  let history = useHistory();

  if (!isAuthenticated())
    return <Redirect to="/login" />;

  return (
    <>
      <ListsProvider>
        <Header history={history} />
        <SearchBar />
        <Lists />
      </ListsProvider>
    </>
  );
}

export default Dashboard;
