import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import ArrowIcon from '@icons/arrow.svg?react';
import type { Option } from '@customTypes/select';
import cn from 'classnames'

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label: string;
};

const Select = ({ options, value, onChange, label }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? 'Select';

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.selectBox} ref={wrapperRef} onClick={() => setIsOpen((prev) => !prev)}>
        <span className={styles.selected}>{selectedLabel}</span>
        <ArrowIcon
          className={cn(styles.arrow, { [styles.open]: isOpen })}
          width={30}
          height={30}
        />
        {isOpen && (
          <ul className={styles.dropdown}>
            {options.map((opt) => (
              <li
                key={opt.value}
                className={cn(styles.option, {
                  [styles.selected]: opt.value === value,
                })}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;

