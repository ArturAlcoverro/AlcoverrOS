import { IconFactory } from '@components/icon-factory/icon-factory'
import { RegularText } from '@components/texts/regular-text'
import '@components/windows/desktop.css'
import { WindowFactory } from '@components/windows/window-factory'
import { useExplorer } from '@hooks/use-explorer'
import { useWindows } from '@hooks/use-windows'
import { File, Folder } from '@store/explorer/types'
import { WindowKey } from '@store/windows/types'
import { AnimatePresence } from 'motion/react'
import { useRef } from 'react'

export const WindowManager: React.FC = () => {
  const { windows, openWindow } = useWindows()
  const { getItem } = useExplorer()
  const desktop = getItem('/desktop')
  const desktopItems = []
  const dragContainerRef = useRef<HTMLDivElement>(null)

  if (desktop instanceof Folder) {
    desktopItems.push(...desktop.items)
  }

  function desktopItemsClickHandler(key: WindowKey) {
    return () => {
      openWindow(key)
    }
  }

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex items-end flex-col p-6 absolute">
        {desktopItems.map((item) => {
          const key: WindowKey = item instanceof File ? item.window : { id: 'project', data: item.path }

          return (
            <button
              onClick={desktopItemsClickHandler(key)}
              key={item.name}
              className="group h-24 w-24 border border-divider px-6 pt-[14px] pb-[7px] -mb-[1px] flex flex-col justify-center items-center gap-[6px]"
            >
              <IconFactory
                icon={item.icon}
                className="stroke-font group-hover:stroke-accent transition-all duration-300"
              />
              <RegularText>{item.name}</RegularText>
            </button>
          )
        })}
      </div>
      {/* <div className="h-[calc(100%+2px)] w-[calc(100%+2px)] relative -top-[1px] -left-[1px] pointer-events-none">
        <AnimatePresence></AnimatePresence>
      </div> */}
      <div
        ref={dragContainerRef}
        className="h-[calc(100%+2px)] w-[calc(100%+2px)] relative -top-[1px] -left-[1px] pointer-events-none"
      >
        <AnimatePresence>
          {windows.map((window) => (
            <WindowFactory key={window.url} window={window} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
