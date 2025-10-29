import type { GameItem } from '@customTypes/api';
import styles from './styles.module.scss';
import { useState } from 'react';

type Props = Pick<GameItem, 'gameName' | 'gameID'>

const GameCard = ({ gameName, gameID }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const imageUrl = `https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`;

  return (
    <div className={styles.card}>
      {!loaded && (
        <div className={styles.skeleton} />
      )}
      <img
        className={styles.img}
        src={imageUrl}
        alt={`${gameName} img`}
        onLoad={() => setLoaded(true)}
      />
      <p className={styles.name}>{gameName}</p>
    </div>
  )
};

export default GameCard;