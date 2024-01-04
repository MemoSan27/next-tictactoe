'use client'
import styles from './styles/Board.module.css';
import { Square } from './Square';
import { useBoard } from './hooks/useBoard';

export const Board = () => {

  const { board, updateBoard, winnerName, winner, resetGame } = useBoard();
  
  return (
    <section className={styles.board}>
      <article className={styles.board__game}>
        {
          board.map((square, index) => (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
            {square}
            </Square>
          ))
        }
        
      </article>
        {
          winnerName !== '' && <p className={styles.board__winner}>{winnerName} has won this game!!!</p>
        }
        {
          winner === 'Empate' && <p className={styles.board__winner}>Draw Game!!!</p>
        }
        <button 
          className={styles.board__ngButton}
          onClick={resetGame}
        >
          New Game
        </button>
      
    </section>
  )
}
