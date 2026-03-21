import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';

function getInitialTheme() {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
  };
}