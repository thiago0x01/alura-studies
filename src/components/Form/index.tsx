import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { ITask } from '../../types/Task';
import Button from '../Button';
import style from './form.module.scss';
import { v4 } from 'uuid';

interface FormProps {
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps): JSX.Element {
  const [task, setTask] = useState<ITask>({} as ITask);

  function createTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks((c) => [
      ...c,
      {
        ...task,
        selected: false,
        finished: false,
        id: v4(),
      },
    ]);

    setTask({
      task: '',
      time: '',
      selected: false,
      finished: false,
      id: '',
    });
  }

  return (
    <form className={style.newTask} onSubmit={createTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>

        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar"
          value={task.task}
          onChange={(event) => setTask({ ...task, task: event.target.value })}
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>

        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          value={task.time}
          onChange={(event) => setTask({ ...task, time: event.target.value })}
        />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
