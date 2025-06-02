import { Background } from '@components/background'
import { Cursor } from '@components/cursor/cursor'
import { ErrorBoundary } from '@components/error-boundary'
import { Navbar } from '@components/navbar'
import { Screen } from '@components/screen'
import { Desktop } from '@components/windows/desktop'

export default function App() {
  return (
    <ErrorBoundary fallback={<p>Oops, something went wrong.</p>}>
      <Screen>
        <Cursor />
        <Background />
        <div className="absolute flex w-full h-full flex-col">
          <div className="grow">
            <Desktop />
          </div>
          <Navbar />
        </div>
      </Screen>
    </ErrorBoundary>
  )
}
