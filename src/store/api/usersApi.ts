// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Users } from '../../types/users';




export const usersParksApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://firebasestorage.googleapis.com/v0/b/portal-keando.appspot.com/o/samples%2FusersList.json?alt=media&token=5b65fb0a-0812-4a10-81d6-a2b206466b6c' }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetUsersQuery } = usersParksApi