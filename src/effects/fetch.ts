import {
  useFetchBansQuery,
  useFetchCategoriesQuery,
  useFetchPricePostMutation,
  useFetchProductsQuery,
  useFetchRulesQuery
} from "@store/features/api/api";

// Категории товаров:
export const useFetchCategories = () => {
  const { data, isLoading, error } = useFetchCategoriesQuery();
  const categories = data?.response || [];

  return { categories, isLoading, error };
}

// Списки товаров:
export const useFetchProducts = (good: string = 'GROUPS') => {
  const { data, isLoading, error } = useFetchProductsQuery(good);
  const products = data?.response || [];

  return { products, isLoading, error };
}

// Списки правил:
export const useFetchRules = () => {
  const { data, isLoading, error } = useFetchRulesQuery();
  const rules = data?.response || [];

  return { rules, isLoading, error };
}

// Списки банов:
export const useFetchBans = (number: number, search: string = '') => {
  const { data, isLoading, error } = useFetchBansQuery({number, search});
  const {bans = [], total} = data?.response || {};

  return { bans, total, isLoading, error };
}

// Цена за товар в модал.окне:
export const useFetchPrice = () => {
  const [createPrice, {isLoading}] = useFetchPricePostMutation();

  return { createPrice, isLoading };
}