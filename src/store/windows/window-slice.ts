import { createSlice } from '@reduxjs/toolkit'
import { moveReducer, openReducer, closeReducer, resizeReducer, focusReducer, unfocusAllReducer } from './window-reducer'
import { Window } from './types'

const initialState: Window[] = []

export const windowsSlice = createSlice({
  name: 'windows',
  initialState: initialState,
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