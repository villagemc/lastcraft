import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategories } from './ICategories';
import { IProducts } from './IProducts';
import { IRules } from './IRules';
import { IBans, IBansArgument } from './IBans';
import { IFormDataProduct } from './IFormDate';
import { IPrice } from './IPrice';

export const lastcraftAPI = createApi({
  reducerPath: 'lastcraftAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://last-craft.net/api/' }),
  endpoints: (builder) => ({
    fetchCategories: builder.query<ICategories, void>({
      query: () => `product/types`,
    }),
    fetchProducts: builder.query<IProducts, string>({
      query: (good) => `product/all/${good}`,
    }),
    fetchRules: builder.query<IRules, void>({
      query: () => `rules`,
    }),
    fetchBans: builder.query<IBans, IBansArgument>({
      query: ({number, search}) => `core/banlist?page=${number}&size=20&search=${search}`,
    }),
    fetchPricePost: builder.mutation<IPrice, IFormDataProduct>({
      query: (data) => ({
        url: `client/price`,
        method: 'POST',
        body: data
      }),
    }),
  }),
});

export const {
  useFetchCategoriesQuery,
  useFetchProductsQuery,
  useFetchRulesQuery,
  useFetchBansQuery,
  useFetchPricePostMutation
} = lastcraftAPI;