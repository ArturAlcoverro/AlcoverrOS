import { IconFactory } from '@components/icon-factory/icon-factory'
import { useWindows } from '@hooks/use-windows'
import { useClickAway } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { Menu } from './menu/menu'
import { RegularText } from './texts/regular-text'

export const Navbar: React.FC<NavbarProps> = () => {
  const [time, setTime] = useState<number>(Date.now())
  const [open, setOpen] = useState<boolean>(false)
  const { unfocusAllWindows, focusWindow } = useWindows()

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
      <nav className="backdrop-blur-[var(--blur)] bg-backgroundOpaque grow-0 h-20 border-divider border-t flex justify-between">
        <button
          ref={ref}
          onClick={clickHandler}
          className="aspect-square h-full border-divider border-r hover:bg-backgroundSecondary box-border flex justify-center items-center"
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

interface NavbarProps {}
