import { Window } from '@store/windows/windowsTypes/Window'
import { WindowId, WindowKey } from '@store/windows/windowsTypes/WindowKey'
import { FC, LazyExoticComponent, Suspense, lazy } from 'react'
import { WindowContainer } from './WindowContainer'

const windows: Record<WindowId, WindowElement> = {
  about: lazy(() => import('@components/Windows/AboutMe/AboutMe')),
  work: lazy(() => import('@components/Windows/FileExplorer/FileExplorer')),
  contact: lazy(() => import('@components/Windows/Contact/Contact')),
  explorer: lazy(() => import('@components/Windows/FileExplorer/FileExplorer')),
  project: lazy(() => import('@components/Windows/FileExplorer/FileExplorer')),
}

export const WindowFactory: React.FC<WindowFactoryProps> = ({ windowKey, window }) => {
  const WindowContent: WindowElement = windows[windowKey.id as WindowId]

  return (
    <WindowContainer windowItem={window}>
      <Suspense>{<WindowContent />}</Suspense>
    </WindowContainer>
  )
}

type WindowElement = LazyExoticComponent<FC>

interface WindowFactoryProps {
  windowKey: WindowKey
  window: Window
}
