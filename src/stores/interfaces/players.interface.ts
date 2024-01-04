export interface PlayersState{
    playerOne: {
        name: string;
        wonGames: number;
        turn: string;
    }
    playerTwo: {
        name: string;
        wonGames: number;
        turn: string;
    }
    
}

export interface Actions{
    setPlayerNameOne: (name: string) => void;
    setPlayerNameTwo: (name: string) => void;
    setScorePlayerOne: () => void;
    setScorePlayerTwo: () => void;
    
}