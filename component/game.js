import useGameover from "../hooks/useGameover"
import styles from "../styles/game.module.css"
import Tetris from "./tetris"
import Menu from './menu'

const Game = ({ rows, col }) => {
    const [gameover,setGameover,resetGameover]=useGameover();

    const start = () => {
        resetGameover();
        console.log(`Started gameover ${gameover}`);
    }
    return (<>
        <div className={styles.game}>
            {
                gameover?(
                    <Menu onClick={start} />
                ):(
                    <Tetris rows={rows} col={col} setGameover={setGameover} />
                )
            }
            
        </div>
    </>
    )
}

export default Game