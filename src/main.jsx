import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Catalog from './pages/CatalogPage.jsx'
import Blog from './pages/BlogPage.jsx'
import Post1 from './pages/Post1Page.jsx'
import Post2 from './pages/Post2Page.jsx'
import Post3 from './pages/Post3Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/Post1" element={<Post1 />} />
        <Route path="/Blog/Post2" element={<Post2 />} />
        <Route path="/Blog/Post3" element={<Post3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
