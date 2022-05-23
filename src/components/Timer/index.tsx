import Button from '../Button';
import Watch from './Watch';
import style from './timer.module.scss';
import { ITask } from '../../types/Task';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';

interface TimerProps {
  currentTask: ITask | undefined;
  finishTask: () => void;
}

function Timer({ currentTask, finishTask }: TimerProps): JSX.Element {
  const [time, setTime] = useState<number>();

  function stopwatch(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return stopwatch(counter - 1);
      }

      finishTask();
    }, 1000 * 1);
  }

  useEffect(() => {
    if (currentTask?.time) {
      setTime(timeToSeconds(currentTask.time));
    }
  }, [currentTask]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>

      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>

      <Button onClick={() => stopwatch(time)}>Começar</Button>
    </div>
  );
}

export default Timer;
