import { useContext } from 'react';
import { TasksContext } from '../providers/TasksProvider';

import Task from "../components/Task";
import "./Tasks.css";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="task-container">
      <div className="tasks">
        {tasks?.map(task =>
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.is_checked === 1 ? true : false}
          />
        )}
      </div>
    </div>
  );
}

export default Tasks;
