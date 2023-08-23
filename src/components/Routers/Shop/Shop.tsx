import { Fragment, type FC } from 'react';
import Header from '@components/Routers/Header/Header';
import ShopCategories from './ShopCategories';
import ShopDesc from './ShopDesc';
import ShopProducts from './ShopProducts';

const Shop: FC = () => {
  return (
    <Fragment>
      <Header title="Магазин" />
      <div className="shop">
        <ShopCategories />
        <ShopDesc />
        <ShopProducts />
      </div>
    </Fragment>
  );
}
export default Shop;