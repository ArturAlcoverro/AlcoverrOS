import { Suspense } from 'react'
import { IconId, IconSize, icons } from './icon-data'

export const IconFactory: React.FC<IconFactoryProps> = ({ icon, size = 48, ...props }) => {
  const Icon = icons[icon][size]
  return <Suspense>{<Icon {...props} />}</Suspense>
}

interface IconFactoryProps extends React.SVGProps<SVGSVGElement> {
  icon: IconId
  size?: IconSize
  ref?: React.ForwardedRef<SVGSVGElement>
}
