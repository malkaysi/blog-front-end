import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
/* import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Home from './features/home';
import Profile from './features/profile';
import Post from './features/post'; */
import App from './App.js';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ]
  },
]) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);

