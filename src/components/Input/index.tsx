import styles from './styles.module.scss';
import SearchIcon from '@icons/search.svg?react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
}

const Input = ({ value, onChange, label, placeholder }: Props) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <SearchIcon className={styles.icon} width={20} height={20} />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Input;

