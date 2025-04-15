import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';
import LoadingPage from '../Pages/LoadingPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/loading', element: <LoadingPage /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

export default Router;