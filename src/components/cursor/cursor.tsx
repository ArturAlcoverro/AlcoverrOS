import { motion, useMotionValue } from 'motion/react'
import { useEffect } from 'react'
import { CursorFollowers } from './cursor-follower'
import { useCursorStore } from './cursor-store'

function Cursor() {
  const x = useMotionValue(window.innerWidth / 2)
  const y = useMotionValue(window.innerHeight / 2)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <>
      <motion.div
        className="size-3 flex fixed justify-center items-center -translate-x-1/2 -translate-y-1/2"
        style={{ x, y, position: 'fixed', zIndex: 9999, pointerEvents: 'none' }}
      >
        <div className="size-1 rounded-full bg-accent absolute" />
      </motion.div>

      <CursorFollowers />
    </>
  )
}

export { Cursor, useCursorStore }
