import { useFetchProducts } from '@effects/fetch';
import { useLengthString } from '@effects/string';
import { IProduct } from '@store/features/api/IProducts';
import { openPopup } from '@store/features/popupSlice';
import { togglePopupProduct } from '@store/features/productSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { useMemo, type FC, useEffect, useRef } from 'react';

const ShopProducts: FC = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(state => state.input.value);
  const notion = useAppSelector(state => state.category);
  const category = notion.type?.toUpperCase();

  const { products, isLoading, error } = useFetchProducts(category);
  const refItemsProduct = useRef<HTMLLIElement[]>([]);
  
  // В зависимости от категории, товаров и поисковика
  // изменяется поиск по товарам:
  const newProducts = useMemo(() => {
    return products.filter(product => {
      if (!inputValue) return true;

      const name = product.name.toUpperCase().trim();
      const value = inputValue.toUpperCase().trim();

      return name.includes(value);
    });
  }, [inputValue, notion, products]);

  // Применение стилей к карточкам при скролле:
  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.isIntersecting
          ? entry.target.classList.add('shop__product_active')
          : entry.target.classList.remove('shop__product_active')
      });
    }, options);

    refItemsProduct.current.forEach((item) => observer.observe(item));

    return () => {
      refItemsProduct.current.forEach((item) => observer.unobserve(item));
    }
  }, [newProducts]);

  // включаем попап:
  const eventOpenPopup = (product: IProduct) => {
    dispatch(openPopup());
    dispatch(togglePopupProduct(product));
  }

  if (error) return (
    <p className="content__wait">Ошибка при запросе данных с товарами.</p>
  )

  if (isLoading) return (
    <p className="content__wait">Загрузка данных с товарами...</p>
  )

  if (!newProducts.length) return (
    <p className="content__wait">Нет товаров по данному поиску!</p>
  )

  return (
    <ul className="shop__products">
      {newProducts.map((product, index) => (
        <li
          className="shop__product"
          key={index}
          onClick={() => eventOpenPopup(product)}
          ref={e => e && refItemsProduct.current.push(e)}
        >
          <div className="shop__images">
            <img
              className="shop__image"
              alt={product.name}
              src='https://www.marcadamus.com/images/xl/The-Beginning.jpg'
            />
          </div>
          <h3 className="shop__name">{product.name}</h3>
          <p className="shop__description">{useLengthString(product?.description) || ''}</p>
          <span className="shop__price">{`Цена: ${product.price} РУБ.`}</span>
        </li>
      ))}
    </ul>
  );
}

export default ShopProducts;