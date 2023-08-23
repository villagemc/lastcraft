import { useFetchBans } from '@effects/fetch';
import { useLengthString, useToggleStringDate } from '@effects/string';
import { changeSite, totalSite } from '@store/features/siteSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { useEffect, type FC } from 'react';

const BanListItems: FC= () => {
  const inputValue = useAppSelector(state => state.input.value);
  const site = useAppSelector(state => state.site);
  const dispatch = useAppDispatch();

  const { bans, total = 1, isLoading, error } = useFetchBans(site.count, inputValue);

  useEffect(() => {
    dispatch(totalSite(total));
  }, [bans]);

  useEffect(() => {
    dispatch(changeSite(1));
  }, [inputValue]);

  if (error) return (
    <p className="content__wait">Ошибка при запросе данных бан-листа.</p>
  );

  if (isLoading) return (
    <p className="content__wait">Загрузка данных с блокировками игроков...</p>
  );

  if (!bans.length) return (
    <p className="content__wait">Нет пользователей по данному поиску!</p>
  );

  return (
    <ul className="bans__items">
      <li className="bans__item bans__item_head">
        <span className="bans__name bans__name_head">Пользователь</span>
        <span className="bans__name bans__name_head">Админ</span>
        <span className="bans__name bans__name_head">Дата и время</span>
        <span className="bans__name bans__name_head">Причина</span>
        <span className="bans__name bans__name_head">Время разбана</span>
      </li>
      {bans.map((ban, index) => (
      <li key={index} className="bans__item bans__item_main">
        <div className="bans__block">
          <span className="bans__name bans__name_table">Пользователь:</span>
          <span className="bans__name">{ban?.target || ''}</span>
        </div>
        <div className="bans__block">
          <span className="bans__name bans__name_table">Админ:</span>
          <span className="bans__name">{ban?.source || ''}</span>
        </div>
        <div className="bans__block">
          <span className="bans__name bans__name_table">Дата и время:</span>
          <span className="bans__name">{useToggleStringDate(ban?.startTime) || ''}</span>
        </div>
        <div className="bans__block">
          <span className="bans__name bans__name_table">Причина:</span>
          <span className="bans__name">{useLengthString(ban?.reason) || ''}</span>
        </div>
        <div className="bans__block">
          <span className="bans__name bans__name_table">Время разбана:</span>
          <span className="bans__name">{useToggleStringDate(ban?.expires) || 'Навсегда'}</span>
        </div>
      </li>
      ))}
    </ul>
  );
}

export default BanListItems;