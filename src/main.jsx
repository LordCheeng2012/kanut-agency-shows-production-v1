import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ServiceProvider } from './providers/service-provider'

const rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <ServiceProvider>
        <App />
      </ServiceProvider>
    </StrictMode>
  </BrowserRouter>
)

rootElement.classList.remove('is-loading')
document.body.classList.remove('is-loading')
