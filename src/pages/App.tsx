import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/Task';
import style from './app.module.scss';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [currentTask, setCurrentTask] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setCurrentTask(selectedTask);

    setTasks((c) =>
      c.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  }

  function finishTask() {
    if (currentTask) {
      setCurrentTask(undefined);

      setTasks((c) =>
        c.map((task) => {
          if (task.id === currentTask.id) {
            return {
              ...task,
              selected: false,
              finished: true,
            };
          }

          return task;
        })
      );
    }
  }

  return (
    <div className={style.appStyle}>
      <Form setTasks={setTasks} />

      <List tasks={tasks} selectTask={selectTask} />

      <Timer currentTask={currentTask} finishTask={finishTask} />
    </div>
  );
}

export default App;
