import { useGetGamesQuery } from '@api';
import GameCard from './components/GameCard';
import styles from './styles.module.scss';
import Logo from '@icons/bomb.svg?react';
import Filters from './components/Filters';
import { useGamesDispatch, useGamesSelector } from '@hooks/games';
import { selectFilteredGames } from '@api/selectors';
import { useEffect } from 'react';
import { loadMore } from '@api/slices/games';

const Main = () => {
  const dispatch = useGamesDispatch();
  const { data } = useGetGamesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.result ?? [],
    }),
  });
  const filteredGames = useGamesSelector(state =>
    selectFilteredGames(state, data)
  );

  useEffect(() => {
    let isThrottled = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 20 && !isThrottled) {
        dispatch(loadMore());
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Filters />
      <div className={styles.headerWrap}>
        <Logo className={styles.logo} width={30} height={30} />
        <p className={styles.header}>Pragmatic Play</p>
      </div>
      <div className={styles.gameWrap}>
        {filteredGames.map((item) => (
          <GameCard key={item.gameID} gameName={item.gameName} gameID={item.gameID} />
        ))}
      </div>
    </div>
   
  )
};

export default Main;