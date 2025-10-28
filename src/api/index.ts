import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GameItem } from '../types/api';
import { API_GAMES, BASE_URL } from '../constants/api';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGames: builder.query<GameItem[], void>({
      query: () => `${API_GAMES}?partner_name=belparyaj`,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
