import { useState, useEffect, type FC } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const DashThemes: FC = () => {
  const [localTheme, setLocalTheme] = useState(localStorage.getItem('theme') || 'light');

  // Отслеживание изменения темы:
  useEffect(() => {
    document.documentElement.dataset.theme = localTheme;
  }, [localTheme]);

  // Изменение и сохранение темы:
  const changeTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    setLocalTheme(theme);
  }

  return (
    <ul className="dash__themes">
      <li className="dash__theme dash__theme_light" onClick={() => changeTheme('light')}>
        <BsSunFill />
        <span>Светлая</span>
      </li>
      <li className="dash__theme dash__theme_dark" onClick={() => changeTheme('dark')}>
        <BsMoonStarsFill />
        <span>Тёмная</span>
      </li>
    </ul>
  );
}

export default DashThemes;