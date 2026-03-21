import styles from './App.module.css';
import { AppHeader } from './components/AppHeader';
import { BowlBuilder } from './components/BowlBuilder';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.page}>
      <AppHeader isDark={isDark} onToggleTheme={toggleTheme} />
      <main className={styles.main}>
        <BowlBuilder />
      </main>
    </div>
  );
}
