import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../api/userApi'

interface InitialStateType {
  loading: boolean
  error: any
  userInfo: any
  isLoggedIn: boolean
}
const initialState: InitialStateType = {
  loading: false,
  error: null,
  userInfo: null,
  isLoggedIn: false
}
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser(state) {
      state.isLoggedIn = false
      state.userInfo = null
      console.log(state)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
        state.isLoggedIn = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false

        state.error = action.payload
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.isLoggedIn = true
        state.userInfo = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isLoggedIn = false
      })
  }
})

export const { logoutUser } = userReducer.actions
