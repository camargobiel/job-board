import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/shared/styles/main.css'
import { App } from './App.js';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
