type BaseWindowId = 'about' | 'work' | 'contact' | 'explorer'
type ProjectWindowId = 'project'

export type WindowId = BaseWindowId | ProjectWindowId

interface BaseWindowKey {
  id: BaseWindowId
}

interface ProjectWindowKey {
  id: ProjectWindowId
  data: string
}

export type WindowKey = BaseWindowKey | ProjectWindowKey

export interface Window {
  key: WindowKey
  title: string
  url: string
  cords?: WindowCoords
  size: WindowSize
  defaultSize: WindowSize
  minSize: WindowSize
  zIndex: number
  minimized: boolean
  focused: boolean
}

export type WindowCoords = {
  x: number
  y: number
}

export type WindowSize = {
  width: number
  height: number
}
