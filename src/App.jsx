import styles from './App.module.css'
import { Icon } from './components/Icon'
import BowlIcon from './icons/bowl.svg?react'

export default function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Build a Bowl</h1>
      <Icon as={BowlIcon} size={32} label="Noodle Bowl" />
      <a
        className={styles.link}
        href="https://vitejs.dev"
        target="_blank"
        rel="noreferrer"
      >
        Vite docs
      </a>
    </main>
  )
}
