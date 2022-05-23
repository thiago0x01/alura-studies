import { ReactNode } from 'react';

import style from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
