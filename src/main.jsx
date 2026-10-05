import  App  from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ServiceProvider } from './providers/service-provider'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ServiceProvider>
          <App/>
      </ServiceProvider>  
    </StrictMode>
  </BrowserRouter>
)
