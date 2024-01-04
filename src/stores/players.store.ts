import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Actions, PlayersState } from "./interfaces/players.interface";

type PlayersStore = PlayersState & Actions;

export const usePlayersStore = create<PlayersStore>()(
    devtools(

        (set) => ({
        
        playerOne: {
            name: '',
            wonGames: 0,
            turn: 'X',
        },
        playerTwo: {
            name: '',
            wonGames: 0,
            turn: 'O',
        },
    
        setPlayerNameOne: (newName: string) => set((state) => ({playerOne: {...state.playerOne, name: newName}})),
        setPlayerNameTwo: (newName: string) => set((state) => ({playerTwo: {...state.playerTwo, name: newName}})),

        setScorePlayerOne: () => set((state) => ({playerOne: {...state.playerOne, wonGames: state.playerOne.wonGames + 1}})),
        setScorePlayerTwo: () => set((state) => ({playerTwo: {...state.playerTwo, wonGames: state.playerTwo.wonGames + 1}})),
    }))
);