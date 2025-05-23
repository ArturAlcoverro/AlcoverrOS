export const H1: React.FC<H1Props> = ({ children, secondary = false, ...props }) => {
  const color = secondary ? 'text-font-secondary' : 'text-font'

  const className = props.className || ''
  delete props.className

  return (
    <h1 className={`${color} ${className} font-mono text-[2rem] font-medium leading-normal `} {...props}>
      {children}
    </h1>
  )
}

interface H1Props extends React.InputHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  secondary?: boolean
}
