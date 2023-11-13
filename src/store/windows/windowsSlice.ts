import { createSlice } from '@reduxjs/toolkit'
import windowsState from './windowsInitialState'
import { moveReducer, openReducer, closeReducer, resizeReducer, focusReducer, unfocusAllReducer } from './windowsReducers'

export const windowsSlice = createSlice({
  name: 'windows',
  initialState: windowsState,
  reducers: {
    move: moveReducer,
    open: openReducer,
    close: closeReducer,
    resize: resizeReducer,
    focus: focusReducer,
    unfocusAll: unfocusAllReducer,
  },
})

export default windowsSlice.reducer

export const { move, open, close, resize, focus, unfocusAll } = windowsSlice.actions