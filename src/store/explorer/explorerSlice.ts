import { createSlice } from '@reduxjs/toolkit'
import explorerState from './explorerInitialState'

export const explorerSlice = createSlice({
  name: 'windows',
  initialState: explorerState,
  reducers: {},
})

export default explorerSlice.reducer

export const {  } = explorerSlice.actions