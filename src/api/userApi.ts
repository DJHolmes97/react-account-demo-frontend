import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (
    {
      firstName,
      lastName,
      email,
      password
    }: { firstName: string; lastName: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios
        .post('https://8y6w07.sse.codesandbox.io/register', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        })
        .then((response) => response)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
