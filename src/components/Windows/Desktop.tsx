import { useCursorFocus } from '@components/cursor/use-cursor-focus'
import { IconFactory } from '@components/icon-factory/icon-factory'
import { RegularText } from '@components/texts/regular-text'
import { WindowFactory } from '@components/windows/window-factory'
import { useExplorer } from '@hooks/use-explorer'
import { File, Folder } from '@store/explorer/types'
import { WindowKey } from '@store/windows/types'
import { useWindowsStore } from '@store/windows/windows-store'
import { AnimatePresence } from 'motion/react'

export const DesktopIcon: React.FC<{ item: File | Folder }> = ({ item }) => {
  const openWindow = useWindowsStore((s) => s.open)
  const { onMouseEnter, onMouseLeave } = useCursorFocus()

  const key: WindowKey = item instanceof File ? item.window : { id: 'project', data: item.path }

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => openWindow(key)}
      key={item.name}
      className="group h-24 w-24 border border-divider px-6 pt-3.5 pb-[7px] flex flex-col justify-center items-center gap-1.5"
    >
      <IconFactory icon={item.icon} className="stroke-font group-hover:stroke-accent transition-all duration-300" />
      <RegularText>{item.name}</RegularText>
    </button>
  )
}

export const Desktop: React.FC = () => {
  const windows = useWindowsStore((s) => s.windows)

  const explorer = useExplorer()

  const desktop = explorer.getItem('/desktop')
  const desktopItems = []

  if (desktop instanceof Folder) {
    desktopItems.push(...desktop.items)
  }

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex items-end flex-col p-6 absolute gap-3 flex-wrap">
        {desktopItems.map((item) => (
          <DesktopIcon key={item.name} item={item} />
        ))}
      </div>
      <div className="h-[calc(100%+2px)] w-[calc(100%+2px)] relative -top-px -left-px pointer-events-none">
        <AnimatePresence>
          {windows.map((window) => (
            <WindowFactory key={window.url} window={window} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
