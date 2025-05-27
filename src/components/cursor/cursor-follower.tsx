import { motion } from 'motion/react'

import { SpringOptions, useSpring } from 'motion/react'
import { useEffect } from 'react'
import { cn } from 'src/utils/cn'
import { useCursorStore } from './cursor-store'

type Props = { position: 'top' | 'bottom' }

const spring: SpringOptions = {
  damping: 200,
  stiffness: 3000
}

export const CursorFollower: React.FC<Props> = ({ position }) => {
  const { focusElement } = useCursorStore()

  const x = useSpring(window.innerWidth / 2, spring)
  const y = useSpring(window.innerHeight / 2, spring)

  const rotation =
    focusElement === null
      ? {
          animate: { rotate: [0, 360] },
          transition: { rotate: { ease: 'linear', duration: 10, repeat: Infinity } }
        }
      : { animate: { rotate: 90 }, transition: undefined }

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (focusElement === null) {
        x.set(e.clientX)
        y.set(e.clientY)
        return
      }

      const rect = focusElement.getBoundingClientRect()

      if (position === 'top') {
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

  return (
    <motion.div
      className={cn('size-5 flex -translate-x-1/2 -translate-y-1/2 fixed z-[9999] pointer-events-none', {
        'justify-start items-start': position === 'top',
        'justify-end items-end': position === 'bottom'
      })}
      style={{ x, y }}
      animate={rotation.animate}
      transition={rotation.transition}
    >
      <div className="w-0.5 h-full bg-accent absolute" />
      <div className="w-full h-0.5 bg-accent absolute" />
    </motion.div>
  )
}
