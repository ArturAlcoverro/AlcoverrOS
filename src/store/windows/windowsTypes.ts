import { IconId } from '@components/IconFactory/IconData'

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type WindowOptionalProps = 'zIndex' | 'opened' | 'minimized' | 'focused' | 'minSize' | 'size' | 'defaultSize'

export type WindowKey = 'about' | 'work' | 'contact' | 'explorer' | 'project'

export type WindowCoords = {
  x: number
  y: number
}

export type WindowSize = {
  width: number
  height: number
}

export const WindowFactory = (window: PartialBy<BaseWindow, WindowOptionalProps>): BaseWindow => {
  return {
    id: window.id,
    name: window.name,
    title: window.title,
    url: window.url,
    icon: window.icon,
    cords: window.cords,
    minSize: window.minSize || { width: 300, height: 300 },
    size: window.defaultSize || { width: 600, height: 600 },
    defaultSize: window.defaultSize || { width: 600, height: 600 },
    zIndex: window.zIndex || 0,
    opened: window.opened || false,
    minimized: window.minimized || false,
    focused: window.focused || false,
  }
}

export interface BaseWindow {
  id: WindowKey
  name: string
  title: string
  url: string
  icon: IconId
  cords?: WindowCoords
  size: WindowSize
  defaultSize: WindowSize
  minSize: WindowSize
  zIndex: number
  opened: boolean
  minimized: boolean
  focused: boolean
}

export interface ExplorerWindow extends BaseWindow {
  id: 'explorer'
  data: {
    path: string
  }
}

export interface ProjectWindow extends BaseWindow {
  id: 'project'
  data: {
    project: string
  }
}

export type WindowsState = Record<WindowKey, BaseWindow>

