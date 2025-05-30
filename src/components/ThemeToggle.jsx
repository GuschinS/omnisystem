import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [themeMode, setThemeMode] = useState('auto');

  const isNightTime = () => {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 6;
  };

  // Применение темы
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      setThemeMode('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      setThemeMode('light');
    } else {
      const nightMode = isNightTime();
      if (nightMode) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
      setThemeMode('auto');
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
      setThemeMode('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
      setThemeMode('dark');
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Иконка солнца (скрыта на мобильных) */}
      <span className={`md:block hidden text-yellow-500 dark:text-white ${themeMode !== 'dark' ? 'opacity-100' : 'opacity-50'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </span>

      {/* Свитчер темы */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className="absolute opacity-0 w-full h-full cursor-pointer"
        />
        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-accent transition-colors"></div>
        <div
          className={`absolute w-5 h-5 bg-white rounded-full top-0 left-0 transform translate-y-0 transition-transform duration-300 ease-in-out ${
            isDark ? 'translate-x-5 bg-primary' : 'translate-x-0'
          }`}
        ></div>
      </label>

      {/* Иконка луны (скрыта на мобильных) */}
      <span className={`md:block hidden text-blue-500 dark:text-white ${themeMode !== 'light' ? 'opacity-100' : 'opacity-50'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </div>
  );
}