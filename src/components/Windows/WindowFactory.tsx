import { WindowKey, BaseWindow } from '@store/windows/windowsTypes'
import { FC, LazyExoticComponent, Suspense, lazy } from 'react'
import { WindowContainer } from './WindowContainer'

const windows: Record<WindowKey, WindowElement> = {
  about: lazy(() => import('@components/Windows/AboutMe/AboutMe')),
  work: lazy(() => import('@components/Windows/AboutMe/AboutMe')),
  contact: lazy(() => import('@components/Windows/AboutMe/AboutMe')),
  explorer: lazy(() => import('@components/Windows/FileExplorer/FileExplorer')),
}

export const WindowFactory: React.FC<WindowFactoryProps> = ({ windowKey, window }) => {
  const WindowContent: WindowElement = windows[windowKey]
  const fallback = <div></div>

  return (
    <WindowContainer windowItem={window}>
      <Suspense fallback={fallback}>{<WindowContent />}</Suspense>
    </WindowContainer>
  )
}

type WindowElement = LazyExoticComponent<FC>

interface WindowFactoryProps {
  windowKey: WindowKey
  window: BaseWindow
}
