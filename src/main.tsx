import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/global'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProviderWrapper } from '@/contexts/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <ThemeProviderWrapper>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProviderWrapper>
)
