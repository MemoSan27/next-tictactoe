import { usePlayersStore } from "@/stores/players.store";
import { useState } from "react";
import { combosWin, turns } from "..";


export const useBoard = () => {
    const [ board, setBoard ] = useState(Array(9).fill(null)); 
    const [ turn, setTurn ] = useState(turns.X);
    const [ winner, setWinner ] = useState('');
    const [ winnerName, setWinnerName ] = useState('');
    
    const setScorePlayerOne = usePlayersStore( state => state.setScorePlayerOne );
    const setScorePlayerTwo = usePlayersStore( state => state.setScorePlayerTwo );
    
    const playerOne = usePlayersStore( state => state.playerOne.name );
    const playerTwo = usePlayersStore( state => state.playerTwo.name );
    
    const checkWinner = (boardToCheck: any) => {
      for(const combo of combosWin){
        const[a, b, c] = combo;
        if(
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ){
          if(boardToCheck[a] === 'X'){
            setScorePlayerOne();
            setWinnerName(playerOne.toUpperCase());
          }else if(boardToCheck[a] === 'O'){
            setScorePlayerTwo();
            setWinnerName(playerTwo.toUpperCase());
          }
          return boardToCheck[a];
        }
      }
      return null;
    }
    
    const checkEndGame = (newBoard: Array<string>) => {
    
      return newBoard.every((square) => square !== null);
    }
    
    const updateBoard = (index: number) => {
      if(board[index] || winner) return;
    
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      const newTurn = (turn === turns.X) ? turns.O : turns.X;
      setTurn(newTurn);
      const newWinner = checkWinner(newBoard);
      if(newWinner){
        setWinner(newWinner)
      } else if(checkEndGame(newBoard)){
        setWinner('Empate');
      }
    
    }
    
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setTurn(turns.X);
      setWinner('');
      setWinnerName('');
    }

    return{
        board,
        updateBoard,
        winner,
        winnerName,
        resetGame,
    }
}
