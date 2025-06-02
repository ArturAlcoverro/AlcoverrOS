import { motion } from 'motion/react'

import { cn } from '@/utils/cn'
import { type SpringOptions, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { getPosition } from './cursor-follower.utils'
import { useCursorStore } from './cursor-store'

export type ArrowId = '1' | '2'

type Props = {
  id: ArrowId
}

const spring: SpringOptions = {
  damping: 200,
  stiffness: 3000
}

const variants = {
  idle: {
    rotate: [0, 360],
    transition: { rotate: { ease: 'linear', duration: 10, repeat: Infinity } }
  },
  focused: {
    transition: { duration: 10 }
  }
}

const CursorFollower: React.FC<Props> = ({ id }) => {
  const { focusElement } = useCursorStore()

  const x = useSpring(window.innerWidth / 2, spring)
  const y = useSpring(window.innerHeight / 2, spring)
  const [rotation, setRotation] = useState<number>(0)

  console.log('>>', rotation)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (focusElement === null) {
        x.set(e.clientX)
        y.set(e.clientY)
        return
      }

      const position = getPosition({ id, position: 'corners', focusElement })

      x.set(position.x)
      y.set(position.y)
      setRotation(position.rotation)
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [focusElement])

  return (
    <motion.div
      className={cn('size-5 flex -translate-x-1/2 -translate-y-1/2 fixed z-[9999] pointer-events-none', {
        'justify-start items-start': id === '1',
        'justify-end items-end': id === '2'
      })}
      style={{ x, y, ...(focusElement !== null && { rotate: rotation }) }}
      variants={variants}
      animate={focusElement === null ? 'idle' : 'focused'}
    >
      <div className="w-0.5 h-full bg-accent absolute" />
      <div className="w-full h-0.5 bg-accent absolute" />
    </motion.div>
  )
}

export const CursorFollowers = () => (
  <>
    <CursorFollower id="1" />
    <CursorFollower id="2" />
  </>
)
