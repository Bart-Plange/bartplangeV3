import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReactLenis } from '@studio-freight/react-lenis';
import ScrollProvider from './components/ScrollProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactLenis root>
      <ScrollProvider>
        <App />
      </ScrollProvider>  
    </ReactLenis>
  </React.StrictMode>,
)
