import { useCursorFocus } from '@components/cursor/use-cursor-focus'
import { IconFactory } from '@components/icon-factory/icon-factory'
import { Window, WindowCoords } from '@store/windows/types'
import { useWindowsStore } from '@store/windows/windows-store'
import { motion, TargetAndTransition } from 'motion/react'
import { Resizable, ResizeCallback, ResizeStartCallback } from 're-resizable'
import React, { useState } from 'react'
import Draggable from 'react-draggable' // The default

import { cn } from '@/utils/cn'
import { useShallow } from 'zustand/shallow'
import { SmallText } from '../texts/small-text'

interface WindowContainerProps {
  windowItem: Window
  children: React.ReactNode
}

export const WindowContainer: React.FC<WindowContainerProps> = ({ windowItem, children }) => {
  const [closeWindow, moveWindow, resizeWindow, focusWindow] = useWindowsStore(
    useShallow((s) => [s.close, s.move, s.resize, s.focus])
  )

  const { onMouseEnter, onMouseLeave } = useCursorFocus()

  const [coords, setCoords] = useState<WindowCoords>({
    x: windowItem.cords?.x || 50,
    y: windowItem.cords?.y || 50
  })

  const [onResizeCoords, setOnResizeCoords] = useState<WindowCoords>({
    x: windowItem.cords?.x || 50,
    y: windowItem.cords?.y || 50
  })

  const focusHandler = () => {
    focusWindow(windowItem.key)
  }

  const onResizeStartHandler: ResizeStartCallback = () => {
    focusWindow(windowItem.key)
    setOnResizeCoords(coords)
  }

  const onResizeHandler: ResizeCallback = (_e, direction, _ref, data) => {
    if (['top', 'left', 'topLeft'].includes(direction)) {
      setCoords({ x: onResizeCoords.x - data.width, y: onResizeCoords.y - data.height })
    } else if (direction === 'bottomLeft') {
      setCoords({ x: onResizeCoords.x - data.width, y: coords.y })
    } else if (direction === 'topRight') {
      setCoords({ x: coords.x, y: onResizeCoords.y - data.height })
    }
  }

  const onResizeStopHandler: ResizeCallback = (_e, _direction, _ref, data) => {
    resizeWindow(windowItem.key, {
      height: windowItem.size.height + data.height,
      width: windowItem.size.width + data.width
    })
  }

  const closeWindowHandler = () => {
    closeWindow(windowItem.key)
  }

  const onCloseStyles: TargetAndTransition = {
    opacity: 0,
    filter: 'blur(0px)',
    scale: 0.95
  }
  const onOpenStyles: TargetAndTransition = {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1
  }

  return (
    <Draggable
      handle=".drag"
      defaultPosition={coords}
      bounds="parent"
      position={coords}
      onStart={focusHandler}
      onDrag={(_e, data) => setCoords({ x: data.x, y: data.y })}
      onStop={(_e, data) => moveWindow(windowItem.key, { x: data.x, y: data.y })}
    >
      <Resizable
        boundsByDirection={true}
        onResizeStart={onResizeStartHandler}
        onResize={onResizeHandler}
        onResizeStop={onResizeStopHandler}
        bounds={'parent'}
        defaultSize={windowItem.size}
        minHeight={windowItem.minSize.height}
        minWidth={windowItem.minSize.width}
        className={`absolute! flex flex-col pointer-events-auto`}
      >
        <motion.div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          initial={onCloseStyles}
          animate={onOpenStyles}
          exit={onCloseStyles}
          transition={{ duration: 0.25, bounce: 1 }}
          className={cn(
            'absolute h-full w-full flex flex-col border border-divider backdrop-blur-(--blur) bg-background-opaque',
            { '!opacity-75 border-divider/50': !windowItem.focused }
          )}
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={focusHandler}
            onClick={focusHandler}
            onMouseDown={focusHandler}
            className="grow-0 w-full border-b border-divider h-6 shrink-0 relative flex justify-end items-center cursor-default"
          >
            <div className="drag w-full h-full flex justify-center items-center ">
              <SmallText className="select-none leading-none absolute" secondary>
                {windowItem.title}
              </SmallText>
            </div>
            <button onClick={closeWindowHandler} className="h-full aspect-square border-l border-divider group">
              <IconFactory
                icon="close"
                size={48}
                className="w-full aspect-square h-auto p-0.5 fill-font stroke-font group-hover:stroke-accent"
              />
            </button>
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={focusHandler}
            onClick={focusHandler}
            // onMouseDown={focusHandler}
            className="grow overflow-hidden cursor-default"
          >
            {children}
          </div>
        </motion.div>
      </Resizable>
    </Draggable>
  )
}
