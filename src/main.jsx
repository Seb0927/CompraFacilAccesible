import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from "react-router";
import './index.css'
import { Background, Catalog, Blog, Login, Post1, Post2, Post3 } from './components'

// Component map for dynamic loading
const components = {
  catalog: Catalog,
  blog: Blog,
  login: Login,
  post1: Post1,
  post2: Post2,
  post3: Post3
}

// Dynamic page component
function DynamicPage(props) {
  // Use either passed prop or URL parameter
  const params = useParams();
  const componentKey = (props.componentName || params.componentName || 'catalog').toLowerCase();
  
  console.log('Component key:', componentKey); // Debug logging
  console.log('Available components:', Object.keys(components)); // Debug logging
  
  const Component = components[componentKey] || Catalog;
  
  return (
    <Background>
      <Component />
    </Background>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicPage componentName="catalog" />} />
        <Route path="/blog" element={<DynamicPage componentName="blog" />} />
        <Route path="/blog/:componentName" element={<DynamicPage />} />
        <Route path="/login" element={<DynamicPage componentName="login" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)