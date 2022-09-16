import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Store, AnyAction } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from '../reducers/userReducer'
import thunk, {
  ThunkActionDispatch,
  ThunkDispatch,
  ThunkMiddleware
} from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({ user: userReducer.reducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk as ThunkMiddleware]
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useThunkDispatch = () =>
  useDispatch<ThunkDispatch<any, undefined, AnyAction>>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
