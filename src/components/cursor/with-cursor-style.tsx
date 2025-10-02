import { type MouseEventHandler, useRef } from 'react'
import { type CursorStyle, useCursorStore } from './cursor-store'

type Props = {
  onMouseEnter?: MouseEventHandler | undefined
  onMouseLeave?: MouseEventHandler | undefined
}

export function withCursorStyle<TProps extends Props>(Component: React.FC<TProps>, style: CursorStyle) {
  const ComponentWithCursorStyle = (props: TProps & { style?: CursorStyle }) => {
    const timeoutRef = useRef<NodeJS.Timeout>()
    const setStyle = useCursorStore((s) => s.setStyle)

    const { onMouseEnter, onMouseLeave, style: styleProp, ...rest } = props
    return (
      <Component
        onMouseEnter={(e) => {
          onMouseEnter?.(e)
          timeoutRef.current = setTimeout(() => setStyle(styleProp ?? style ?? 'default'), 10)
        }}
        onMouseLeave={(e) => {
          onMouseLeave?.(e)
          setStyle('default')
          clearTimeout(timeoutRef.current)
        }}
        {...(rest as TProps)}
      />
    )
  }

  ComponentWithCursorStyle.displayName = `withCursorStyle(${Component.displayName})`

  return ComponentWithCursorStyle
}
