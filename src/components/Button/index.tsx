import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
