import { ITask } from '../../../types/Task';
import style from './item.module.scss';

interface ItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

function Item({
  task,
  time,
  selected,
  finished,
  id,
  selectTask,
}: ItemProps): JSX.Element {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''} ${
        finished ? style.finishedItem : ''
      }`}
      onClick={() =>
        !finished &&
        selectTask({
          task,
          time,
          selected,
          finished,
          id,
        })
      }
    >
      <h3>{task}</h3>

      <span>{time}</span>

      {finished && (
        <span className={style.finished} aria-label="tarefa completada">
          Completado
        </span>
      )}
    </li>
  );
}

export default Item;
