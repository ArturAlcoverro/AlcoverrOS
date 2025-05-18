/* eslint-disable react/jsx-no-comment-textnodes */
// import { data } from './MenuData'
import { CSSTransition } from 'react-transition-group'
import { H1 } from '../texts'
import { sections, actions } from './menu-data'
import './Menu.css'
import { MenuSection } from './menu-section'
import { MenuAction } from './menu-action'

export const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <CSSTransition
      in={open}
      timeout={{
        enter: 1250,
        exit: 0,
      }}
      classNames="menu-animation"
    >
      <div className="overflow-hidden w-[30rem] flex opacity-0 bg-backgroundOpaque backdrop-blur-sm absolute bottom-full border border-l-0 border-b-0 border-divider box-border">
        <div className="border-r border-divider w-14 flex-grow-0 relative">
          <div className="w-full h-full origin-top-left absolute -rotate-90 top-full pt-[.1875rem] pl-[1.25rem]">
            <H1 className="whitespace-nowrap">
              Artur Alcoverro <span className="text-fontSecondary">// Frontend Dev</span>
            </H1>
          </div>
        </div>
        <div className="flex flex-grow flex-col relative">
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

interface MenuProps {
  open: boolean
}
