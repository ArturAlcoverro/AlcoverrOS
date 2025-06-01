import { CSSTransition } from 'react-transition-group'
import { H1 } from '../texts'
import { MenuAction } from './menu-action'
import { actions, sections } from './menu-data'
import { MenuSection } from './menu-section'
import './menu.css'

type MenuProps = {
  open: boolean
}

export const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <CSSTransition
      in={open}
      timeout={{
        enter: 1250,
        exit: 0
      }}
      classNames="menu-animation"
    >
      <div className="overflow-hidden w-120 flex opacity-0 bg-background-opaque backdrop-blur-xs absolute bottom-full border border-l-0 border-b-0 border-divider box-border">
        <div className="border-r border-divider w-14 grow-0 relative">
          <div className="w-full h-full origin-top-left absolute -rotate-90 top-full pt-[.1875rem] pl-5">
            <H1 className="whitespace-nowrap">
              Artur Alcoverro <span className="text-font-secondary">{'// Frontend Dev'}</span>
            </H1>
          </div>
        </div>
        <div className="flex grow flex-col relative">
          <div className="absolute h-full w-full overflow-y-scroll scrollbar-hidden">
            {sections.map((section) => (
              <MenuSection key={section.title} data={section} />
            ))}
          </div>
          <div className="menu-actions absolute bottom-0 border-divider border-t border-l flex flex-col">
            {actions.map((action) => (
              <MenuAction key={action.icon} {...action} />
            ))}
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
