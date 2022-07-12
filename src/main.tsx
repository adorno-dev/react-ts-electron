import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './main.css'
import { Index } from './pages'
import { Main } from './pages/main'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
