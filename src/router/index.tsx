import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import App from '../App'
import Home from '../pages/Home'
import Loading from '@/components/Loading/index.tsx'
const Articles = lazy(() => import('../pages/Articles/index.tsx'))
const ArticleDetail = lazy(() => import('../pages/ArticleDetail/index.tsx'))
const About = lazy(() => import('../pages/About'))
const Projects = lazy(() => import('../pages/Projects'))
// import Articles from '../pages/Articles/index.tsx'
// import ArticleDetail from '../pages/ArticleDetail/index.tsx'
// import About from '../pages/About'
// import Projects from '../pages/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'articles',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Articles />
          </Suspense>
        )
      },
      {
        path: 'articles/:id',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <ArticleDetail />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <About />
          </Suspense>
        )
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Projects />
          </Suspense>
        )
      }
    ]
  }
])

export default router
