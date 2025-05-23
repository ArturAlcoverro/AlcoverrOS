export const H2: React.FC<H2Props> = ({ children, secondary = false, ...props }) => {
  const color = secondary ? 'text-font-secondary' : 'text-font'

  const className = props.className || ''
  delete props.className

  return (
    <h2 className={`${color} ${className} font-mono text-2xl font-medium leading-normal`} {...props}>
      {children}
    </h2>
  )
}

interface H2Props extends React.InputHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  secondary?: boolean
}
