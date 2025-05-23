import { IconFactory } from '@components/icon-factory/icon-factory'
import { useWindows } from '@hooks/use-windows'
import { Window, WindowCoords } from '@store/windows/types'
import { motion } from 'motion/react'
import { Resizable, ResizeCallback, ResizeStartCallback } from 're-resizable'
import React, { useState } from 'react'
import Draggable, { DraggableEventHandler } from 'react-draggable' // The default
import { SmallText } from '../texts/small-text'

interface WindowContainerProps {
  windowItem: Window
  children: React.ReactNode
}

export const WindowContainer: React.FC<WindowContainerProps> = ({ windowItem, children }) => {
  const { closeWindow, moveWindow, resizeWindow, focusWindow } = useWindows()

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

  const onDragHandler: DraggableEventHandler = (_e, data) => {
    setCoords({ x: data.x, y: data.y })
  }

  const onDragStopHandler: DraggableEventHandler = (_e, data) => {
    moveWindow(windowItem.key, { x: data.x, y: data.y })
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

  return (
    <Draggable
      handle=".drag"
      defaultPosition={coords}
      bounds="parent"
      position={coords}
      onStart={focusHandler}
      onDrag={onDragHandler}
      onStop={onDragStopHandler}
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
        className={`!absolute flex flex-col  pointer-events-auto`}
      >
        <motion.div
          style={{
            transformOrigin: 'top',
            perspective: '1000px'
          }}
          initial={{ opacity: 1, filter: 'blur(4px)', scale: 0.95, rotateX: 45 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, rotateX: 0 }}
          exit={{ opacity: 1, filter: 'blur(4px)', scale: 0.95, rotateX: -45 }}
          transition={{ duration: 0.3 }}
          className="window-animation-container absolute h-full w-full flex flex-col border border-divider backdrop-blur-[var(--blur)] bg-backgroundOpaque"
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={focusHandler}
            onClick={focusHandler}
            // onMouseDown={focusHandler}
            className="grow-0 w-full border-b border-divider h-6 shrink-0 relative flex justify-end items-center cursor-default"
          >
            <div className="drag w-full h-full flex justify-center items-center ">
              <SmallText className="select-none leading-none absolute" secondary>
                {windowItem.title}
              </SmallText>
            </div>
            <button onClick={closeWindowHandler} className="h-full aspect-square border-l border-divider group">
              <IconFactory
                onClick={closeWindowHandler}
                icon="close"
                size={48}
                className="w-full aspect-square h-auto p-[0.125rem] fill-font stroke-font group-hover:stroke-accent"
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

          {!windowItem.focused && (
            <div className="absolute h-[calc(100%+4px)] w-[calc(100%+4px)] -top-[2px] -left-[2px] bg-black opacity-50 pointer-events-none"></div>
          )}
        </motion.div>
      </Resizable>
      {/* <div className="!absolute flex flex-col border border-divider backdrop-blur-[var(--blur)] bg-backgroundOpaque pointer-events-auto">

      </div> */}
    </Draggable>
  )
}
