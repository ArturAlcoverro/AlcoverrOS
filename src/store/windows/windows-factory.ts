import { Window, WindowId, WindowKey } from './types'

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type WindowOptionalProps = 'minSize' | 'defaultSize'

type PartialWindow = Omit<PartialBy<Window, WindowOptionalProps>, 'url' | 'zIndex' | 'minimized' | 'focused' | 'size'>

const windowsData: Record<WindowId, Omit<PartialWindow, 'key'>> = {
  about: {
    title: 'About',
    minSize: { width: 400, height: 400 }
  },
  work: {
    title: 'Work'
  },
  contact: {
    title: 'Contact',
    defaultSize: { width: 450, height: 300 },
    minSize: { width: 450, height: 300 }
  },
  explorer: {
    title: 'Explorer'
  },
  project: {
    title: 'Project'
  }
}

export const WindowsFactory = (windowKey: WindowKey): Window => {
  const window = windowsData[windowKey.id]

  return {
    key: windowKey,
    title: window.title,
    url: `/${windowKey.id}`,
    minSize: window.minSize || { width: 300, height: 300 },
    size: window.defaultSize || { width: 600, height: 600 },
    defaultSize: window.defaultSize || { width: 600, height: 600 },
    zIndex: 0,
    minimized: false,
    focused: false
  }
}
