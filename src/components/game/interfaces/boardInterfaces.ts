import { ReactNode } from "react";

export interface turnType {
    X: string,
    O: string,
  }
  
export interface SquareProps {
    children?: ReactNode,
    updateBoard?: any,
    index?: number,
  }