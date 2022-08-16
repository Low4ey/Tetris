import React, { useState } from 'react'
import { buildBoard } from '../utils/board';

const useBoard = ({rows,col}) => {
    const [board,setBoard]=useState(buildBoard({rows,col}));
  return (

  )
}

export default useBoard