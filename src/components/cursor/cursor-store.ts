import { create } from 'zustand'

type CursorStyle = 'default' | 'pointer' | 'close' | 'grab' | 'expand-x' | 'expand-y' | 'expand-xy'

type CursorStore = {
  focusElement: HTMLElement | null
  style: CursorStyle
  setFocusElement: (element: HTMLElement | null) => void
  setStyle: (style: CursorStyle) => void
}

const useCursorStore = create<CursorStore>((set) => ({
  style: 'default',
  focusElement: null,
  setFocusElement: (element: HTMLElement | null) => set({ focusElement: element }),
  setStyle: (style: CursorStyle) => set({ style })
}))

export { useCursorStore, type CursorStore, type CursorStyle }
