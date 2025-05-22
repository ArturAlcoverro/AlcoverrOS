import { PayloadAction } from '@reduxjs/toolkit'
import { Window, WindowCoords, WindowKey, WindowSize } from './types'
import { WindowFactory } from './window-factory'

function getWindow(windows: Window[], key: WindowKey): Window | undefined {
  return windows.find((w) => w.key.id === key.id)
}

/**
 * Save the window cordd (useful for minimize and maximize features)
 */
export function moveReducer(state: Window[], action: PayloadAction<{ key: WindowKey; cords: WindowCoords }>) {
  const { key, cords } = action.payload
  const window = getWindow(state, key)

  if (window) {
    window.cords = cords
  }

  return state
}

export function closeReducer(state: Window[], action: PayloadAction<WindowKey>) {
  const key = action.payload
  return state.filter((w) => w.key.id !== key.id)
}

export function openReducer(state: Window[], action: PayloadAction<WindowKey>) {
  const key = action.payload
  const window = getWindow(state, key)

  if (!window) {
    state.push(WindowFactory(key))
  }

  return bringFront(state, key)
}

/**
 * Save the window size (useful for minimize and maximize features)
 */
export function resizeReducer(state: Window[], action: PayloadAction<{ key: WindowKey; size: WindowSize }>) {
  const { key, size } = action.payload
  const window = getWindow(state, key)

  if (window) {
    window.size = size
  }

  return state
}

export function focusReducer(state: Window[], action: PayloadAction<{ key?: WindowKey }>) {
  let key = action.payload.key ?? null

  if (key) {
    return bringFront(state, key)
  }

  if (state.length > 0 && !key) {
    key = state[state.length - 1].key
    return bringFront(state, key)
  }

  return state
}

export function unfocusAllReducer(state: Window[]) {
  return state.map((w) => ({ ...w, focused: false }))
}

function bringFront(state: Window[], key: WindowKey): Window[] {
  const window = getWindow(state, key)

  if (window) {
    window.zIndex = 1000
  }

  return order(state)
}

function bringBack(state: Window[], key: WindowKey): Window[] {
  const window = getWindow(state, key)

  if (window) {
    window.zIndex = -1
  }
  return order(state)
}

function order(state: Window[]): Window[] {
  const newState = state.sort((a, b) => a.zIndex - b.zIndex)

  for (let i = 0; i < newState.length; i++) {
    newState[i].zIndex = 1
    newState[i].focused = false
  }

  if (newState.length > 0) {
    newState[newState.length - 1].focused = true
  }

  return newState
}
