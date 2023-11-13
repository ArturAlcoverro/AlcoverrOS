import waves_wallpaper from '@assets/images/waves_wallpaper.jpg'

export const Background: React.FC<BackgroundProps> = () => {
  return (
    <div className="absolute h-full w-full">
      <img src={waves_wallpaper} className='h-full w-full object-cover' alt="wallpaper" />
    </div>
  )
}

interface BackgroundProps {}
