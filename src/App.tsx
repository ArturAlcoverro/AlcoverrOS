import { Background } from '@components/Background'
import { Navbar } from '@components/Navbar'
import { WindowManager } from '@components/Windows/Desktop'

export default function App() {

  return (
    <div className="h-[100dvh]">
      <Background />
      <div className="absolute flex w-full h-full flex-col">
        <div className="grow">
          <WindowManager />
        </div>
        <Navbar />
      </div>
    </div>
  )
}
