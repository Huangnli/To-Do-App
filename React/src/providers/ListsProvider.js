import { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [tmpLists, setTmpLists] = useState(null);

  useEffect(() => {
    // Enviando uma requisição para obter todas as listas do usuário
    api.get('http://127.0.0.1:8000/api/lists')
      .then(res => {
        setLists(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function createList() {
    api.post('http://127.0.0.1:8000/api/lists/create')
      .then(res => {
        setLists([...lists, res.data]);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function updateList(id, name) {
    api.put('http://127.0.0.1:8000/api/lists/' + id, {
      name: name
    }).then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function deleteList(id) {
    setLists(lists.filter(list => list.id !== id));
    api.delete('http://127.0.0.1:8000/api/lists/' + id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function searchList(term) {
    api.get('http://127.0.0.1:8000/api/search/' + term)
      .then(res => {
        setTmpLists(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function resetSearch() {
    setTmpLists(null);
  }

  return (
    <ListsContext.Provider
      value={{ lists, tmpLists, createList, updateList, deleteList, searchList, resetSearch}}
    >
      { children }
    </ListsContext.Provider>
  );
}
