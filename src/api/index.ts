import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GameListResponse } from '@customTypes/api';
import { API_GAMES, BASE_URL } from '@constants/api';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGames: builder.query<GameListResponse, void>({
      query: () => `${API_GAMES}?partner_name=belparyaj`,
      // query: () => `list.json`
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
