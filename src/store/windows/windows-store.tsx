import { create } from 'zustand'
import type { Window, WindowCoords, WindowKey, WindowSize } from './types'
import { WindowsFactory } from './windows-factory'
import { WindowsStoreUtils } from './windows-store-utils'

type WindowsStore = {
  windows: Window[]
  move: (key: WindowKey, cords: WindowCoords) => void
  open: (key: WindowKey) => void
  close: (key: WindowKey) => void
  resize: (key: WindowKey, size: WindowSize) => void
  focus: (key?: WindowKey) => void
  unfocusAll: () => void
}

export const useWindowsStore = create<WindowsStore>((set) => ({
  windows: [],
  move: (key: WindowKey, cords: WindowCoords) =>
    set((state) => {
      const window = WindowsStoreUtils.getWindow(state.windows, key)
      if (window) window.cords = cords

      return { windows: [...state.windows] }
    }),
  open: (key: WindowKey) => {
    set((state) => {
      const window = WindowsStoreUtils.getWindow(state.windows, key)
      if (!window) state.windows.push(WindowsFactory(key))
      const windows = WindowsStoreUtils.bringFront(state.windows, key)

      return { windows: [...windows] }
    })
  },
  close: (key: WindowKey) => {
    set((state) => {
      const windows = state.windows.filter((w) => w.key.id !== key.id)
      return { windows: [...windows] }
    })
  },
  resize: (key: WindowKey, size: WindowSize) => {
    set((state) => {
      const window = WindowsStoreUtils.getWindow(state.windows, key)
      if (window) window.size = size
      return { windows: [...state.windows] }
    })
  },
  focus: (key?: WindowKey) => {
    set((state) => {
      if (key) {
        return { windows: WindowsStoreUtils.bringFront(state.windows, key) }
      }

      if (!key && state.windows.length > 0) {
        key = state.windows[state.windows.length - 1].key
        return { windows: WindowsStoreUtils.bringFront(state.windows, key) }
      }

      return { windows: [...state.windows] }
    })
  },
  unfocusAll: () => {
    set((state) => {
      return { windows: state.windows.map((w) => ({ ...w, focused: false })) }
    })
  }
}))
