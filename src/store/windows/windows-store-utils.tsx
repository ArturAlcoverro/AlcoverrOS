import type { Window, WindowKey } from './types'

function order(state: Window[]): Window[] {
  const newState = state.sort((a, b) => a.zIndex - b.zIndex)

  for (let i = 0; i < newState.length; i++) {
    newState[i].zIndex = 1
    newState[i].focused = false
  }

  if (newState.length > 0) {
    newState[newState.length - 1].focused = true
  }

  return [...newState]
}

function getWindow(windows: Window[], key: WindowKey): Window | undefined {
  return windows.find((w) => w.key.id === key.id)
}

function bringFront(state: Window[], key: WindowKey): Window[] {
  const window = getWindow(state, key)

  if (window) {
    window.zIndex = 1000
  }

  return [...order(state)]
}

function bringBack(state: Window[], key: WindowKey): Window[] {
  const window = getWindow(state, key)

  if (window) {
    window.zIndex = -1
  }
  return [...order(state)]
}

export const WindowsStoreUtils = {
  getWindow,
  bringFront,
  bringBack
}
