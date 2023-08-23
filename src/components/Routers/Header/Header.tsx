import { toggleDashActive } from '@store/features/dashSlice';
import { toggleValueInput } from '@store/features/inputSlice';
import { useAppDispatch } from '@store/hooks/hooks';
import { useRef, useEffect, type FC } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({title}) => {
  const input = useRef<HTMLInputElement | null>(null);
  const location = useLocation();

  const dispatch = useAppDispatch();

  // Открытие и закрытие дашборда:
  const handleClick = () => {
    dispatch(toggleDashActive());
  }

  // Изменение состояния инпута при изменения поля:
  const handleToggleValueInput = () => {
    const value = input.current?.value || '';
    dispatch(toggleValueInput(value));
  }

  // Очистка полей при переходе страницы:
  useEffect(() => {
    if (input.current) input.current.value = '';
    dispatch(toggleValueInput(''));
  }, [location]);

  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__title">{title}</h2>
        <input
          ref={input}
          onInput={handleToggleValueInput}
          className="header__search"
          placeholder="Поиск..."
          name="search"
          type="text"
        />
        <AiOutlineMenuUnfold
          onClick={handleClick}
          className="header__icon"
        />
      </div>
    </header>
  );
}

export default Header;