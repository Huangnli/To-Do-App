import { useContext } from 'react';

import { ListsContext } from '../providers/ListsProvider';
import { TasksProvider } from '../providers/TasksProvider';

import List from "../components/List";

import "./Lists.css";

const Lists = () => {
  const { lists, tmpLists } = useContext(ListsContext);

  return (
    <main>
      {
      tmpLists === null ?
        lists?.map(list =>
          <TasksProvider listId={list.id} key={list.id}>
            <List key={list.id} id={list.id} name={list.name} />
          </TasksProvider>
        )
        :
        tmpLists?.map(list =>
          <TasksProvider listId={list.id} key={list.id}>
            <List key={list.id} id={list.id} name={list.name} />
          </TasksProvider>
        )
      }
    </main>
  );
}

export default Lists;
