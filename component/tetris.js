import React from 'react'
import styles from "../styles/tetris.module.css"
import Board from './board'
import useBoard from "../hooks/useBoard"
const Tetris = ({rows,col,setGameover}) => {
  return (
    <Board />
  )
}

export default Tetris