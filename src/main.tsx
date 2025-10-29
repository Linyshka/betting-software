import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/global.scss'
import Main from '@containers/Main'
import { Provider } from 'react-redux'
import { store } from '@api/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </StrictMode>,
)
