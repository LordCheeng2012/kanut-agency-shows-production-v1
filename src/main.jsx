import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './pages/App.jsx'
import { ServiceProvider } from '@absolute/context'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ServiceProvider>
          <App/>
      </ServiceProvider>  
    </StrictMode>
  </BrowserRouter>
)
