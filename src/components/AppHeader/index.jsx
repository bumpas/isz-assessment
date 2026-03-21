import styles from './AppHeader.module.css';
import { Icon } from '../Icon';
import Logo from '../../icons/logo-gather.svg?react';
import SunIcon from '../../icons/sun.svg?react';
import MoonIcon from '../../icons/moon.svg?react';

export function AppHeader({ isDark, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/">
        <Icon as={Logo} size={64} label="Gather" />
      </a>
      <button
        type="button"
        className={styles.themeToggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={onToggleTheme}
      >
        <Icon as={isDark ? MoonIcon : SunIcon} size={32} />
      </button>
    </header>
  );
}