import { configureStore } from '@reduxjs/toolkit'
import windowsReducer from './windows/window-slice'

export const store = configureStore({
  reducer: {
    windows: windowsReducer
    // explorer:
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
