import { GamePage } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Game Tic-tac-toe',
  icons: {
   icon: 'https://www.svgrepo.com/show/143264/tic-tac-toe-game.svg'
  },
  description: 'Generated by Guillermo Sandoval',
}

export default function Game() {

  return (
    <GamePage />
  );
}