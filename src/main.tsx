import { createRoot } from 'react-dom/client'
import './assets/css/index.css'


import App from './App.tsx'
import { Provider } from './components/service/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
