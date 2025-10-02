type Props = {
  children: React.ReactNode
}

export const Screen: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="h-dvh !cursor-none [&_*]:!cursor-none hover:[&_*]:!cursor-none //invert"
      style={
        {
          // maskImage: 'url(screen_pixel_mask.svg)',
          // maskSize: '2px',
          // maskPosition: 'center'
        }
      }
    >
      {children}
      <svg
        id="texture"
        className="size-full fixed z-[999999999] pointer-events-none contrast-[60%] brightness-[100%] opacity-15"
      >
        <title>Texture</title>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency={0.6} numOctaves={4} stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"/>
      </svg>
    </div>
  )
}
