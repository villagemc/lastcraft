import { useAppSelector } from '@store/hooks/hooks';
import type { FC } from 'react';

const ShopDesc: FC = () => {
  const notion = useAppSelector(state => state.category);

  if (JSON.stringify(notion) === '{}') {
    return (
      <p className="content__wait">К сожалению, данные по описанию категории не получены, либо подгружаются!</p>
    )
  }

  return (
    <div className="shop__desc">
      <h2 className="shop__title">{notion.name}</h2>
      <p className="shop__subtitle">{notion.desc}</p>
    </div>
  );
}

export default ShopDesc;