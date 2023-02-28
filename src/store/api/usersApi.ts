// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Users } from '../../types/users';




export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://firebasestorage.googleapis.com/v0/b/portal-keando.appspot.com/o/samples%2FusersPasswords.json?alt=media&token=fbead5aa-4756-41db-a147-ac1e14a3a947' }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})