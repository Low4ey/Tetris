import styles from "../styles/menu.module.css"

const Menu = ({onClick}) => {
  return (<>
  <button className={styles.Button} onClick={onClick}>
    Play Tetris
  </button>
  </>
  )
}

export default Menu