import React from 'react'
import styles from './styles/Board.module.css'
import { SquareProps } from '.'

export const Square = ({ children, updateBoard, index }: SquareProps) => {

  const handleClick = () => {
    updateBoard(index);
  }

    return(
      <div
        onClick={handleClick} 
        className={styles.board__square}
      >
        {children}
      </div>
    )
  }