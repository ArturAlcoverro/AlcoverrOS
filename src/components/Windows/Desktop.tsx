import { useWindows } from '@hooks/useWindows'
import { WindowKey } from '@store/windows/windowsTypes/WindowKey'
import { RegularText } from '../Texts/RegularText'
import { IconFactory } from '../IconFactory/IconFactory'
import { WindowFactory } from './WindowFactory'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './Desktop.css'
import { useExplorer } from '@hooks/useExplorer'
import { Folder, File } from '@store/explorer/explorerTypes'

export const WindowManager: React.FC<WindowManagerProps> = () => {
  const { windows, openWindow } = useWindows()
  const { getItem } = useExplorer()
  const desktop = getItem('/desktop')
  const desktopItems = []
  
  if(desktop instanceof Folder){
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
      <TransitionGroup className="h-[calc(100%+2px)] w-[calc(100%+2px)] relative -top-[1px] -left-[1px] pointer-events-none">
        {windows.map((window) => (
          <CSSTransition key={window.url} timeout={250} classNames="window-animation">
            <WindowFactory windowKey={window.key} window={window} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

interface WindowManagerProps {}
