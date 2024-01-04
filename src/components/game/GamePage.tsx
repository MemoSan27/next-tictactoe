'use client'
import React from 'react'
import { Board, Score } from '.'
import { usePlayersStore } from '@/stores/players.store';
import { redirect } from 'next/navigation';
import styles from './styles/GamePage.module.css'

export const GamePage = () => {

    const playerOne = usePlayersStore( state => state.playerOne.name );
    const playerTwo = usePlayersStore( state => state.playerTwo.name );

    if(playerOne === '' || playerTwo === ''){
        redirect('/');
    } 
  
  return (
    <main className={styles.page}>
      <div className="container">
        <h1 className={styles.page__title}>Let's Play!!</h1>
        <Board />
        <Score />
      </div>
    </main>
  )
}