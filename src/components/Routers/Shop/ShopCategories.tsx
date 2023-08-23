import { useFetchCategories } from '@effects/fetch';
import { ICategory } from '@store/features/api/ICategories';
import { toggleCategory } from '@store/features/categorySlice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { type FC, useEffect } from 'react';

const ShopCategories: FC = () => {
  const notion = useAppSelector(state => state.category);
  const dispatch = useAppDispatch();

  const { categories, isLoading, error } = useFetchCategories();

  useEffect(() => {
    dispatch(toggleCategory(categories[0]));
  }, [categories]);

  const handleToggleCategory = (category: ICategory) => {
    dispatch(toggleCategory(category));
  }

  if (error) return (
    <p className="content__wait">Ошибка при запросе данных с категориями товаров!</p>
  )

  if (isLoading) return (
    <p className="content__wait">Загрузка данных с категориями товаров...</p>
  )

  return (
    <ul className="shop__categories">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => handleToggleCategory(category)}
          className={"shop__category" + (
            category.type === notion.type ? ' shop__category_active' : ''
          )}>
          <span>{category.name}</span>
        </li>
      ))}
    </ul>
  ) 
}

export default ShopCategories;