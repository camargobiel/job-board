import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/shared/styles/main.css'
import { ThemeProvider } from "@material-tailwind/react";
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
