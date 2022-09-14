import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../api/userApi'

interface InitialStateType {
  loading: boolean
  error: any
  userInfo: any
}
const initialState: InitialStateType = {
  loading: false,
  error: null,
  userInfo: null
}
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        console.log(action)

        state.error = action.payload
      })
  }
})
