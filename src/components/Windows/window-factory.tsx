import { WindowContainer } from '@components/windows/window-container'
import { Window, WindowId, WindowKey } from '@store/windows/types'
import { FC, LazyExoticComponent, Suspense, lazy } from 'react'

const windows: Record<WindowId, WindowElement> = {
  about: lazy(() => import('@components/windows/about-me/about-me')),
  work: lazy(() => import('@components/windows/file-explorer/file-explorer')),
  contact: lazy(() => import('@components/windows/contact/contact')),
  explorer: lazy(() => import('@components/windows/file-explorer/file-explorer')),
  project: lazy(() => import('@components/windows/file-explorer/file-explorer')),
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
