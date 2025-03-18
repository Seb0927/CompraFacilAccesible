import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Catalog from './pages/CatalogPage.jsx'
import Blog from './pages/BlogPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
