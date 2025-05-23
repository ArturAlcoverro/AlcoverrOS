export const SmallText: React.FC<SmallTextProps> = ({ children, secondary = false, ...props }) => {
  const color = secondary ? 'text-font-secondary' : 'text-font'

  const className = props.className || ''
  delete props.className

  return (
    <p className={`${color} ${className} font-mono text-[14px] font-light leading-[21.5px]`} {...props}>
      {children}
    </p>
  )
}

interface SmallTextProps extends React.InputHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  secondary?: boolean
}
