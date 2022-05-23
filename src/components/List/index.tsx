import { ITask } from '../../types/Task';
import Item from './Item';
import style from './list.module.scss';

interface ListProps {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

function List({ tasks, selectTask }: ListProps): JSX.Element {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>

      <ul>
        {tasks.map((task) => (
          <Item
            key={task.id}
            task={task.task}
            time={task.time}
            selected={task.selected}
            finished={task.finished}
            id={task.id}
            selectTask={selectTask}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
