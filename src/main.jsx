import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <div className="scroll-smooth">
    <App />
    </div>
    </HelmetProvider>
  </StrictMode>,
)
