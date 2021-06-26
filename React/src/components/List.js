import { useContext, useState } from 'react';

import { ListsContext } from '../providers/ListsProvider';
import { TasksContext } from '../providers/TasksProvider';

import Button from './Button';
import Tasks from './Tasks';

import './List.css';

const List = ({ id, name }) => {
  const { updateList, deleteList } = useContext(ListsContext);
  const { createTask } = useContext(TasksContext);
  const [nameList, setNameList] = useState(name);
  const [nameTask, setNameTask] = useState('');

  function handleUpdateList() {
    updateList(id, nameList);
  }

  function handleDeleteList() {
    deleteList(id);
  }

  function handleCreateTask() {
    if (nameTask !== '')
    {
      createTask(nameTask);
      setNameTask('');
    }
  }

  return (
    <div className="list-container">
      <div className="list-info">
        <input
          className="list-name"
          type="text"
          value={nameList === null ? '' : nameList}
          placeholder={"Nome"}
          onChange={e => setNameList(e.target.value)}
          onBlur={() => handleUpdateList()}
          onKeyDown={e => e.key === "Enter" && e.target.blur()}
        />
        <div className="delete-list">
          <Button
            type={"button"}
            className="btn--list-delete"
            onClick={() => handleDeleteList()}
          >
            <span className="material-icons">close</span>
          </Button>
        </div>
      </div>

      <Tasks/>

      <div className="list-options-container">
        <div className="new-task-input">
          <input
            className="name-new-task"
            type="text"
            value={nameTask}
            placeholder={"Adicione uma tarefa"}
            onChange={e => setNameTask(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleCreateTask()}
          />
          <Button
            type={"button"}
            className="btn--list-add"
            onClick={() => handleCreateTask()}
          >
            <span className="material-icons">add_box</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default List;
