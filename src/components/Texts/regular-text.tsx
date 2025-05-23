export const RegularText: React.FC<RegularTextProps> = ({ children, secondary = false, ...props }) => {
  const color = secondary ? 'text-font-secondary' : 'text-font'
  const className = props.className || ''
  delete props.className
  return (
    <p
      className={`${color} ${className} font-mono text-base font-light leading-normal [text-shadow:0_1px_0_rgb(0_0_0/40%)]`}
      {...props}
    >
      {children}
    </p>
  )
}

interface RegularTextProps extends React.InputHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  secondary?: boolean
}
