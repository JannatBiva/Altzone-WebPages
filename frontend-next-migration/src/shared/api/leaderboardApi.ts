import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envHelper } from '@/shared/const/envHelper';

export const leaderboardApi = createApi({
  reducerPath: 'leaderboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: envHelper.apiLink,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const authUser = localStorage.getItem('authUser');
      const token = authUser ? JSON.parse(authUser)?.accessTokenInfo?.accessToken : null;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // 1. GET /leaderboard/player
    getTopPlayers: builder.query({
      query: () => '/leaderboard/player',
    }),

    // 2. GET /leaderboard/clan
    getTopClans: builder.query({
      query: () => '/leaderboard/clan',
    }),

    // 3. GET /leaderboard/clan/position
    getClanPosition: builder.query({
      query: () => '/leaderboard/clan/position',
    }),
  }),
});

export const {
  useGetTopPlayersQuery,
  useGetTopClansQuery,
  useGetClanPositionQuery,
} = leaderboardApi;
