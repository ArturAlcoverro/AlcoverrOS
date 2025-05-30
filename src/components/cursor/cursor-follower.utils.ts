import { ArrowId } from './cursor-follower'

type Position = 'corners' | 'left-side' | 'right-side' | 'center'

type GetSpecificPositionCoordsParams = {
  id: ArrowId
  focusElement: HTMLElement
}

type GetPositionCoordsParams = GetSpecificPositionCoordsParams & {
  position: Position
}

type Coords = {
  x: number
  y: number
}

const getCornersPositions = ({ id, focusElement }: GetSpecificPositionCoordsParams): Coords => {
  const rect = focusElement.getBoundingClientRect()

  if (id === '1') {
    return {
      x: rect.x + rect.width - 10,
      y: rect.y + 10
    }
  }

  return {
    x: rect.x + 10,
    y: rect.y + rect.height - 10
  }
}

export const getPosition = ({ id, position, focusElement }: GetPositionCoordsParams): Coords => {
  if (position === 'corners') {
    return getCornersPositions({ id, focusElement })
  }

  return { x: 0, y: 0 }
}
