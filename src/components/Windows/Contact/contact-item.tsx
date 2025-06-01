import { type IconId } from '@components/icon-factory/icon-data'
import { IconFactory } from '@components/icon-factory/icon-factory'
import { RegularText } from '@components/texts'

export const ContactItem: React.FC<ContactItemProps> = ({ icon, url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group h-24 w-24 border border-divider border-l-0 first:border-l px-6 pt-[14px] pb-[7px] -mb-px flex flex-col justify-center items-center gap-[6px]"
    >
      <IconFactory icon={icon} className="stroke-font group-hover:stroke-accent transition-all duration-300" />
      <RegularText>{name}</RegularText>
    </a>
  )
}

export interface ContactItemProps {
  url: string
  icon: IconId
  name: string
}
