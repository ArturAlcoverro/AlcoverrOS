import { MouseEventHandler } from 'react'
import { useCursorStore } from './cursor-store'

const useCursorFocus = () => {
  const setFocusElement = useCursorStore((s) => s.setFocusElement)

  const onMouseEnter: MouseEventHandler = (e) => {
    setFocusElement(e.currentTarget as HTMLElement)
  }

  const onMouseLeave: MouseEventHandler = () => {
    setFocusElement(null)
  }

  return { onMouseEnter, onMouseLeave }
}

export { useCursorFocus }
