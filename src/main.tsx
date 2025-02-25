import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/main.scss'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
