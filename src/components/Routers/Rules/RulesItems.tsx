import { type FC, useMemo, useState } from 'react';
import { useFetchRules } from '@effects/fetch';
import { IoIosArrowForward } from 'react-icons/io'
import { useAppSelector } from '@store/hooks/hooks';

const RulesItems: FC = () => {
  const { rules, isLoading, error } = useFetchRules();

  const [indexRules, setIndexRules] = useState(NaN);
  const inputValue = useAppSelector(state => state.input.value);

  // Раскрыть пункт при клике:
  const handleClick = (index: number) => {
    indexRules === index
      ? setIndexRules(NaN)
      : setIndexRules(index)
  }

  // Фильтрация правил по поиску:
  const newRules = useMemo(() => {
    return rules.filter(rule => {
      if (!inputValue) return true;

      const name = rule.type.name.toUpperCase().trim();
      const value = inputValue.toUpperCase().trim();

      return name.includes(value);
    });
  }, [inputValue, rules]);
  

  if (error) return (
    <p className="content__wait">Ошибка при запросе данных с правилами сервера.</p>
  )

  if (isLoading) return (
    <p className="content__wait">Загрузка данных с правилами сервера...</p>
  )

  if (!newRules.length) return (
    <p className="content__wait">Нет правил по данному поиску!</p>
  )

  return (
    <ul className="rules__items">
      {newRules.map((rule, index) => (
        <li key={index} className={"rules__item" + (
          indexRules === index ? " rules__item_active" : ""
        )}>
          <div className="rules__header" onClick={() => handleClick(index)}>
            <p className="rules__name">{rule.type.name}</p>
            <IoIosArrowForward className="rules__icon"/>
          </div>
          <ul className="rules__punkts">
            {rule.rows.map((subRule, subIndex) => (
              <li key={subIndex} className="rules__punkt" >{subRule.row}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default RulesItems;