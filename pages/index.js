import Head from 'next/head'
import Image from 'next/image'
import Game from '../component/game'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
  <Game rows={30} col={40} />
  </>
  )
}
