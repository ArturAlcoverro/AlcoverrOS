import { IconFactory } from '@components/IconFactory/IconFactory'
import { IconId } from '@components/IconFactory/IconData'
import { H2, RegularText } from '@components/Texts'

export const MenuSection: React.FC<MenuSectionProps> = ({ data }) => {
  return (
    <section className="px-4 py-3 border-b border-divider flex flex-col gap-2 last:border-0">
      <H2>{data.title}</H2>
      {data.items.map((item) => (
        <button key={item.title} className="group flex p-2 gap-4">
          <IconFactory
            icon={item.icon}
            size={24}
            className="stroke-fontSecondary relative left-0 group-hover:stroke-font transition-all"
          />
          <RegularText secondary className="relative left-0 group-hover:text-font transition-all">
            {item.title}
          </RegularText>
        </button>
      ))}
    </section>
  )
}

interface MenuSectionProps {
  data: MenuSection
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

interface MenuItem {
  title: string
  icon: IconId
  type: 'window' | 'link'
  data: MenuItemWindow | MenuItemLink
}

interface MenuItemWindow {
  window: string
}

interface MenuItemLink {
  url: string
}
