import Select from '@components/Select';
import { useState } from 'react';
import styles from './styles.module.scss';
import Input from '@components/Input';
import Button from '@components/Button';
import { setSearchTerm, setSelectedTypeID } from '@api/slices/games';
import type { GameTypeID } from '@customTypes/api';
import { useGamesDispatch, useGamesSelector } from '@hooks/games';

const gameTypeOptions: { value: GameTypeID | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'vs', label: 'VS' },
  { value: 'ar', label: 'AR' },
  { value: 'cs', label: 'CS' },
  { value: 'lg', label: 'LG' },
  { value: 'bj', label: 'BJ' },
  { value: 'bc', label: 'BC' },
  { value: 'sc', label: 'SC' },
  { value: 'rl', label: 'RL' },
  { value: 'vp', label: 'VP' },
];

const Filters = () => {
  const dispatch = useGamesDispatch();
  const selectedTypeID = useGamesSelector(state => state.games.selectedTypeID);
  const search = useGamesSelector(state => state.games.searchTerm);
  const [searchValue, setSearchValue] = useState(search);

  const handleSelectedTypeID = (value: string) => {
    dispatch(setSelectedTypeID(value as GameTypeID));
  };

  const handleSearchClick = () => {
    dispatch(setSearchTerm(searchValue));
  };
  

  return (
    <div className={styles.filters}>
      <div className={styles.selectWrap}>
        <Select
          label="Game Type"
          options={gameTypeOptions}
          value={selectedTypeID}
          onChange={handleSelectedTypeID}
        />
      </div>
      <div className={styles.inputWrap}>
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={setSearchValue}
          label="Search"
        />
        <Button onClick={handleSearchClick}>Search</Button>
      </div>
    </div>
  )
};

export default Filters;