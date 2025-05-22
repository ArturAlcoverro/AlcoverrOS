import { createSlice } from '@reduxjs/toolkit'
import { Window } from './types'
import {
  closeReducer,
  focusReducer,
  moveReducer,
  openReducer,
  resizeReducer,
  unfocusAllReducer
} from './window-reducer'

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
    unfocusAll: unfocusAllReducer
  }
})

export default windowsSlice.reducer

export const { move, open, close, resize, focus, unfocusAll } = windowsSlice.actions
