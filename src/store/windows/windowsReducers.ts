import { PayloadAction } from '@reduxjs/toolkit'

import { WindowCoords, WindowKey, WindowSize, WindowsState } from './windowsTypes'

/**
 * Save the window cordd (useful for minimize and maximize features)
 * @param state
 * @param action
 * @returns
 */
export function moveReducer(state: WindowsState, action: PayloadAction<{ key: WindowKey; cords: WindowCoords }>) {
  const { key, cords } = action.payload
  state[key].cords = cords
  return state
}

/**
 * Close a window
 * @param state
 * @param action
 * @returns
 */
export function closeReducer(state: WindowsState, action: PayloadAction<WindowKey>) {
  const key = action.payload

  state[key].size = state[key].defaultSize
  delete state[key].cords

  state[key].opened = false
  return bringBack(state, key)
}

/**
 * Close a window
 * @param state
 * @param action
 * @returns
 */
export function openReducer(state: WindowsState, action: PayloadAction<WindowKey>) {
  const key = action.payload
  state[key].opened = true
  return bringFront(state, key)
}

/**
 * Save the window size (useful for minimize and maximize features)
 * @param state
 * @param action
 * @returns
 */
export function resizeReducer(state: WindowsState, action: PayloadAction<{ key: WindowKey; size: WindowSize }>) {
  const { key, size } = action.payload
  state[key].size = size
  return state
}

/**
 * Focus a window by WindowKey
 * @param state
 * @param action
 * @returns
 */
export function focusReducer(state: WindowsState, action: PayloadAction<{ key?: WindowKey }>) {
  let key = action.payload.key ?? null

  if (!key) {
    key = Object.keys(state).reduce((prev, curr) =>
      state[prev as WindowKey].zIndex > state[curr as WindowKey].zIndex ? prev : curr,
    ) as WindowKey
  }

  if (!state[key].opened) return state

  return bringFront(state, key)
}


/**
 * Unfocus all windows
 * @param state 
 * @returns 
 */
export function unfocusAllReducer(state: WindowsState) {
  Object.keys(state).forEach((key) => (state[key as WindowKey].focused = false))
  return state
}


/**
 * Bring a window to front
 * @param state
 * @param action
 * @returns
 */
function bringFront(state: WindowsState, key: WindowKey): WindowsState {
  state[key].zIndex = 1000
  return order(state)
}

/**
 * Bring a window to back
 * @param state
 * @param action
 * @returns
 */
function bringBack(state: WindowsState, key: WindowKey): WindowsState {
  state[key].zIndex = -1
  return order(state)
}

/**
 * Calculate the zIndex of all windows
 * @param state
 * @returns
 */
function order(state: WindowsState): WindowsState {
  Object.keys(state).forEach((key) => (state[key as WindowKey].focused = false))

  const windowsKeys = Object.keys(state).sort((a, b) => state[a as WindowKey].zIndex - state[b as WindowKey].zIndex)
  windowsKeys.forEach((key, index) => {
    state[key as WindowKey].zIndex = index
    if (index === windowsKeys.length - 1) state[key as WindowKey].focused = true
  })

  return state
}
