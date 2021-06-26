import { useContext, useState } from 'react';

import { TasksContext } from '../providers/TasksProvider';

import Button from './Button';

import "./Task.css";

const Task = ({ id, name, isCompleted }) => {
  const { updateTask, deleteTask } = useContext(TasksContext);
  const [nameTask, setNameTask] = useState(name);
  const [isChecked, setIsChecked] = useState(isCompleted);

  function handleCheck() {
    setIsChecked(!isChecked);
    updateTask(id, nameTask, !isChecked);
  }

  function handleUpdateTask() {
    updateTask(id, nameTask, isChecked);
  }

  return (
    <div className="task-item-container">
      <div className="task-info">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheck()}
        />
        <input
          className="task-name"
          type="text"
          value={nameTask}
          onChange={e => setNameTask(e.target.value)}
          onBlur={() => handleUpdateTask()}
          onKeyDown={e => e.key === "Enter" ? handleUpdateTask() : null}
        />
      </div>
      <Button
        type={"button"}
        className="btn--task-delete"
        onClick={() => deleteTask(id)}
      >
        <span className="material-icons">close</span>
      </Button>
    </div>
  );
}

export default Task;
