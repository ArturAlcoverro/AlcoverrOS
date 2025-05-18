import { Background } from '@components/background'
import { Navbar } from '@components/navbar'
import { WindowManager } from '@components/windows/desktop'

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
