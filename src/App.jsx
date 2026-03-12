import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Icon } from './components/Icon';
import { Accordion } from './components/Accordion';
import Logo from './icons/logo-gather.svg?react';
import BowlIcon from './icons/bowl.svg?react';
import SunIcon from './icons/sun.svg?react';
import MoonIcon from './icons/moon.svg?react';

const THEME_STORAGE_KEY = 'theme';

function getInitialTheme() {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <main className={styles.main}>
      <nav>
        <a href="#"><Icon as={Logo} size={64} label="Gather" /></a>
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          className={styles.themeToggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        >
          <Icon
            as={isDark ? MoonIcon : SunIcon}
            size={24}
            label={isDark ? 'Dark mode' : 'Light mode'}
          />
        </button>
      </nav>
      <header>
        <Icon as={BowlIcon} size={32} label="Noodle Bowl" />
        <h1 className={styles.heading}>Build a Bowl</h1>
      </header>
      <section>
        <Accordion name="menu" title="Base">
          <p>Choose your base</p>
          <div className={styles.optionRow}>
            <label className={styles.optionLabel}>
              <input type="radio" name="base" value="rice" />
              <span>Rice</span>
            </label>
          </div>
        </Accordion>
        <Accordion name="menu" title="Protein">
          <p>Choose your protein</p>
          <div className={styles.optionRow}>
            <label className={styles.optionLabel}>
              <input type="radio" name="protein" value="tofu" />
              <span>Tofu</span>
            </label>
          </div>
        </Accordion>
        <Accordion name="menu" title="Toppings">
          <p>Choose your toppings</p>
          <div className={styles.optionRow}>
            <label className={styles.optionLabel}>
              <input
                type="checkbox"
                name="toppings"
                value="avocado"
              />
              <span>Avocado</span>
              <span aria-label="Upcharge of $2.00" className={styles.upcharge}>+$2.00</span>
            </label>
          </div>
        </Accordion>
        <Accordion name="menu" title="Sauce">
          <p>Choose your sauce</p>
          <div className={styles.optionRow}>
            <label className={styles.optionLabel}>
              <input type="checkbox" name="sauce" value="spicy-mayo" />
              <span>Spicy Mayo</span>
            </label>
          </div>
        </Accordion>
      </section>
    </main>
  );
}
