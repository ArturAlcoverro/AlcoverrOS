import { motion } from 'motion/react'

import { SpringOptions, useSpring } from 'motion/react'
import { useEffect } from 'react'
import { cn } from 'src/utils/cn'
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
    rotate: 90
  }
}

const CursorFollower: React.FC<Props> = ({ id }) => {
  const { focusElement } = useCursorStore()

  const x = useSpring(window.innerWidth / 2, spring)
  const y = useSpring(window.innerHeight / 2, spring)

  const rotation =
    focusElement === null
      ? {
          animate: { rotate: [0, 360] },
          transition: { rotate: { ease: 'linear', duration: 10, repeat: Infinity } }
        }
      : {}

  console.log('> ❎🆘🆚 - rotation: ', rotation)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (focusElement === null) {
        x.set(e.clientX)
        y.set(e.clientY)
        return
      }

      const rect = focusElement.getBoundingClientRect()

      if (id === '1') {
        x.set(rect.x + rect.width - 10)
        y.set(rect.y + 10)
      } else {
        x.set(rect.x + 10)
        y.set(rect.y + rect.height - 10)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [focusElement])

  console.log('> ❎🆘🆚 - focusElement: ', focusElement)

  return (
    <motion.div
      className={cn('size-5 flex -translate-x-1/2 -translate-y-1/2 fixed z-[9999] pointer-events-none', {
        'justify-start items-start': id === '1',
        'justify-end items-end': id === '2',
        // '!rotate-90': focusElement !== null
      })}
      style={{ x, y }}
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
