import { WindowContainer } from '@components/windows/window-container'
import type { Window, WindowId } from '@store/windows/types'
import { type FC, type LazyExoticComponent, Suspense, lazy } from 'react'

const windows: Record<WindowId, WindowElement> = {
  about: lazy(() => import('@components/windows/about-me/about-me')),
  work: lazy(() => import('@components/windows/file-explorer/file-explorer')),
  contact: lazy(() => import('@components/windows/contact/contact')),
  explorer: lazy(() => import('@components/windows/file-explorer/file-explorer')),
  project: lazy(() => import('@components/windows/file-explorer/file-explorer'))
}

type WindowFactoryProps = {
  window: Window
}

export const WindowFactory: React.FC<WindowFactoryProps> = ({ window }) => {
  const WindowContent: WindowElement = windows[window.key.id]

  return (
    <WindowContainer windowItem={window}>
      <Suspense>{<WindowContent />}</Suspense>
    </WindowContainer>
  )
}

type WindowElement = LazyExoticComponent<FC>
