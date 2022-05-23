import style from './watch.module.scss';

interface WatchProps {
  time: number | undefined;
}

function Watch({ time = 0 }: WatchProps): JSX.Element {
  const [secondsTen, secondsUnity] = String(Math.floor(time / 60)).padStart(
    2,
    '0'
  );
  const [minutesTen, minutesUnity] = String(time % 60).padStart(2, '0');

  return (
    <>
      <span className={style.watchNumber}>{secondsTen}</span>
      <span className={style.watchNumber}>{secondsUnity}</span>
      <span className={style.watchDivision}>:</span>
      <span className={style.watchNumber}>{minutesTen}</span>
      <span className={style.watchNumber}>{minutesUnity}</span>
    </>
  );
}

export default Watch;
