import React, { useCallback, useState } from 'react'

const useGameover = () => {
    const [gameOver,setGameover]=useState(true);
    const resetGameover=useCallback(()=>{
        setGameover(false);
    },[])
  return [gameOver,setGameover,resetGameover];
}

export default useGameover