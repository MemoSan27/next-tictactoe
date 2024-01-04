'use client'
import { FormEvent } from 'react';
import styles from './FormIndex.module.css'
import { usePlayersStore } from '@/stores/players.store';
import { useRouter } from 'next/navigation';

export const FormIndex = () => {

    const playerOne = usePlayersStore( state => state.playerOne.name );
    const playerTwo = usePlayersStore( state => state.playerTwo.name );

    const setPlayerOne = usePlayersStore( state => state.setPlayerNameOne );
    const setPlayerTwo = usePlayersStore( state => state.setPlayerNameTwo );

    const router = useRouter();

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if( playerOne === '' || playerTwo === ''){
          return alert('Por favor ingrese el nombre de ambos jugadores')
        }

        router.push('/game');
    } 

  return (
    <form className={styles.home__form} onSubmit={submit}>
        <p className={styles.home__label}>Player 1:</p>
        <input 
          className={styles.home__input} 
          value={ playerOne }
          onChange={(e) => setPlayerOne( e.target.value )}
        />
        <p className={styles.home__label}>Player 2:</p>
        <input 
          className={styles.home__input} 
          value={ playerTwo }
          onChange={(e) => setPlayerTwo( e.target.value )}   
        />
        <button onClick={submit} className={styles.home__button}> Let's Play! </button>
    </form>
  )
}
