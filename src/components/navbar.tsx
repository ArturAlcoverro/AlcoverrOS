import { IconFactory } from '@components/icon-factory/icon-factory'
import { useWindowsStore } from '@store/windows/windows-store'
import { useClickAway } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/shallow'
import { Menu } from './menu/menu'
import { RegularText } from './texts/regular-text'

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<number>(Date.now())
  const [open, setOpen] = useState<boolean>(false)

  const [focusWindow, unfocusAllWindows] = useWindowsStore(useShallow((s) => [s.focus, s.unfocusAll]))

  const ref = useClickAway<HTMLButtonElement>(() => {
    setOpen(false)
    focusWindow()
  })

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  function clickHandler() {
    setOpen((open) => {
      if (open) {
        focusWindow()
      } else {
        unfocusAllWindows()
      }
      return !open
    })
  }

  const hours12 = new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const date = new Date(time).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

  return (
    <div className="relative">
      <nav className="backdrop-blur-(--blur) bg-background-opaque grow-0 h-20 border-divider border-t flex justify-between">
        <button
          ref={ref}
          onClick={clickHandler}
          className="aspect-square h-full border-divider border-r hover:bg-background-secondary box-border flex justify-center items-center"
        >
          <IconFactory icon="logo" className="fill-font" />
        </button>
        <div className="p-5 flex flex-col justify-center">
          <RegularText className="text-center">{hours12}</RegularText>
          <RegularText className="text-center">{date}</RegularText>
        </div>
      </nav>
      <Menu open={open}></Menu>
    </div>
  )
}
