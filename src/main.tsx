import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'

import './styles/index.css'
import './styles/colors.css'
import './styles/fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)