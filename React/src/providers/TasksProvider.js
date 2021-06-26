import { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const TasksContext = createContext();

export const TasksProvider = ({ listId, children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Enviando uma requisição para obter as tarefas
    api.get('http://127.0.0.1:8000/api/lists/' + listId + '/tasks')
      .then(res => {
        setTasks(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [listId]);

  function createTask(name) {
    api.post('http://127.0.0.1:8000/api/lists/' + listId + '/tasks/create', {
      name: name
    }).then(res => {
        setTasks([...tasks, res.data]);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function updateTask(id, name, isChecked) {
    api.put('http://127.0.0.1:8000/api/tasks/' + id, {
      name: name,
      isChecked: isChecked
    }).then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    api.delete('http://127.0.0.1:8000/api/tasks/' + id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      { children }
    </TasksContext.Provider>
  );
}
