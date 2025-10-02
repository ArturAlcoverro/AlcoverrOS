import { create } from 'zustand'

type CursorStyle = 'default' | 'pointer' | 'close' | 'grab' | 'expand-x' | 'expand-y' | 'expand-xy'


type CursorStore = {
  focusElement: HTMLElement | null
  style: CursorStyle
  setFocusElement: (element: HTMLElement | null) => void
  setStyle: (style: CursorStyle) => void
}

let timeout: NodeJS.Timeout
const TIMEOUT_MS = 50

const useCursorStore = create<CursorStore>((set) => ({
  style: 'default',
  focusElement: null,
  setFocusElement: (element: HTMLElement | null) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => set({ focusElement: element }), TIMEOUT_MS)
  },
  setStyle: (style: CursorStyle) => set({ style })
}))

export { useCursorStore, type CursorStore, type CursorStyle }
