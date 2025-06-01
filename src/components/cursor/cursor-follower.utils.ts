import { ArrowId } from './cursor-follower'

type Position = 'corners' | 'left-side' | 'right-side' | 'center'

type GetSpecificPositionCoordsParams = {
  id: ArrowId
  focusElement: HTMLElement
}

type GetPositionCoordsParams = GetSpecificPositionCoordsParams & {
  position: Position
}

type PositionData = {
  x: number
  y: number
  rotation: number
}

const getCornersPositions = ({ id, focusElement }: GetSpecificPositionCoordsParams): PositionData => {
  const rect = focusElement.getBoundingClientRect()

  if (id === '1') {
    return {
      x: rect.x + rect.width - 10,
      y: rect.y + 10,
      rotation: 90
    }
  }

  return {
    x: rect.x + 10,
    y: rect.y + rect.height - 10,
    rotation: 90
  }
}

const getLeftSidePosition = ({ id, focusElement }: GetSpecificPositionCoordsParams): PositionData => {
  const rect = focusElement.getBoundingClientRect()

  if (id === '1') {
    return {
      x: rect.x,
      y: rect.y + rect.height / 2,
      rotation: 135
    }
  }

  return {
    x: rect.x - 10,
    y: rect.y + rect.height / 2,
    rotation: -45
  }
}

const getRightSidePosition = ({ id, focusElement }: GetSpecificPositionCoordsParams): PositionData => {
  const rect = focusElement.getBoundingClientRect()

  if (id === '1') {
    return {
      x: rect.x + rect.width,
      y: rect.y + rect.height / 2,
      rotation: -45
    }
  }

  return {
    x: rect.x + rect.width + 10,
    y: rect.y + rect.height / 2,
    rotation: 135
  }
}

const getCenterPosition = ({ id, focusElement }: GetSpecificPositionCoordsParams): PositionData => {
  const rect = focusElement.getBoundingClientRect()

  if (id === '1') {
    return {
      x: rect.x + rect.width,
      y: rect.y + rect.height / 2,
      rotation: 45
    }
  }

  return {
    x: rect.x + rect.width,
    y: rect.y + rect.height / 2,
    rotation: 45
  }
}

export const getPosition = ({ id, position, focusElement }: GetPositionCoordsParams): PositionData => {
  if (position === 'corners') {
    return getCornersPositions({ id, focusElement })
  }

  if (position === 'left-side') {
    return getLeftSidePosition({ id, focusElement })
  }

  if (position === 'right-side') {
    return getRightSidePosition({ id, focusElement })
  }

  if (position === 'center') {
    return getCenterPosition({ id, focusElement })
  }

  return { x: 0, y: 0, rotation: 0 }
}
