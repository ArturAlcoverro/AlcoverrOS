import type { IconId } from '@components/icon-factory/icon-data'
import { IconFactory } from '@components/icon-factory/icon-factory'

export const MenuAction: React.FC<MenuActionProps> = ({ icon, action }) => {
  return (
    <button onClick={action} className="border-b border-divider last:border-0 bg-background p-2">
      <IconFactory icon={icon} size={32} className="stroke-font" />
    </button>
  )
}

export interface MenuActionProps {
  icon: IconId
  action: () => void
}
