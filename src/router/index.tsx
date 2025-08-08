import { createBrowserRouter } from 'react-router-dom';

import App from '../App'
import Home from '../pages/Home/index.tsx';
import Articles from '../pages/Articles/index.tsx';
import ArticleDetail from '../pages/ArticleDetail/index.tsx';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'articles', element: <Articles /> },
      { path: 'articles/:id', element: <ArticleDetail /> },
      { path: 'about', element: <About /> }
    ]
  }
]);

export default router;
