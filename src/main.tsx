import { createRoot } from 'react-dom/client'
// import './index.css'
import GlobalStyle from './styles/global'
import { RouterProvider } from 'react-router-dom'
import router from './router'

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
)
