'use client'

import { usePlayersStore } from "@/stores/players.store";
import styles from './styles/Score.module.css'

export const Score = () => {

    const playerOne = usePlayersStore( state => state.playerOne );
    const playerTwo = usePlayersStore( state => state.playerTwo );

  return (
    <article className={styles.score}>
      <div>
        <h2> Character: "{ playerOne.turn.toUpperCase()}" </h2>
        <h2 className={styles.score__name}> {playerOne.name.toUpperCase()}:</h2>
        <h2 className={styles.score__number}>{playerOne.wonGames}</h2>
        <h2>Won Games</h2>
      </div>
      <div>
        <h2> Character: "{ playerTwo.turn.toUpperCase()}" </h2>
        <h2 className={styles.score__name}>{playerTwo.name.toUpperCase()}:</h2>
        <h2 className={styles.score__number}>{playerTwo.wonGames}</h2>
        <h2>Won Games</h2>
      </div>
    </article>
  )
}
