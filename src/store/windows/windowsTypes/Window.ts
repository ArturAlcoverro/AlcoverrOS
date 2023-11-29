import { WindowKey } from './WindowKey'

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
