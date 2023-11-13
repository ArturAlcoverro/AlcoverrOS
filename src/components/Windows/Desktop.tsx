import { useWindows } from '@hooks/useWindows'
import { WindowKey } from '@store/windows/windowsTypes'
import { RegularText } from '../Texts/RegularText'
import { IconFactory } from '../IconFactory/IconFactory'
import { WindowFactory } from './WindowFactory'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './Desktop.css'

export const WindowManager: React.FC<WindowManagerProps> = () => {
  const { windows, openWindow } = useWindows()

  const desktopWindowKeys: WindowKey[] = Object.keys(windows).filter(
    (key) => windows[key as WindowKey].desktop,
  ) as WindowKey[]

  const openedWindowKeys: WindowKey[] = Object.keys(windows)
    .filter((key) => windows[key as WindowKey].opened)
    .sort((a, b) => windows[a as WindowKey].zIndex - windows[b as WindowKey].zIndex) as WindowKey[]

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex items-end flex-col p-6 absolute">
        {desktopWindowKeys.map((key) => {
          const window = windows[key as WindowKey]
          return (
            <button
              onClick={() => openWindow(key as WindowKey)}
              key={key}
              className="group h-24 w-24 border border-divider px-6 pt-[14px] pb-[7px] -mb-[1px] flex flex-col justify-center items-center gap-[6px]"
            >
              <IconFactory
                icon={window.icon}
                className="stroke-font group-hover:stroke-[blue] transition-all duration-300"
              />
              <RegularText>{window.name}</RegularText>
            </button>
          )
        })}
      </div>
      <TransitionGroup className="h-[calc(100%+2px)] w-[calc(100%+2px)] relative -top-[1px] -left-[1px] pointer-events-none">
        {openedWindowKeys.map((key) => (
          <CSSTransition key={key} timeout={250} classNames="window-animation">
            <WindowFactory windowKey={key as WindowKey} window={windows[key as WindowKey]} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

interface WindowManagerProps {}
