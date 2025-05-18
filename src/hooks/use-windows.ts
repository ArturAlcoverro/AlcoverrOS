import { WindowCoords, WindowKey, WindowSize } from '@store/windows/types'
import { close, focus, move, open, resize, unfocusAll } from '@store/windows/window-slice'
import { useAppDispatch, useAppSelector } from './store'

export const useWindows = () => {
  const windows = useAppSelector((state) => state.windows)
  const dispatch = useAppDispatch()

  const moveWindow = (key: WindowKey, cords: WindowCoords) => {
    dispatch(move({ key, cords }))
  }

  const openWindow = (key: WindowKey) => {
    dispatch(open(key))
  }

  const closeWindow = (key: WindowKey) => {
    dispatch(close(key))
  }

  const resizeWindow = (key: WindowKey, size: WindowSize) => {
    dispatch(resize({ key, size }))
  }

  const focusWindow = (key?: WindowKey) => {
    dispatch(focus({ key }))
  }

  const unfocusAllWindows = () => {
    dispatch(unfocusAll())
  }

  return { windows, moveWindow, openWindow, closeWindow, resizeWindow, focusWindow, unfocusAllWindows }
}
