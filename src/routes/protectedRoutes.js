import React from 'react';
// import { Outlet } from 'react-router-dom';
import Home from '../features/home';
import TailwindHome from '../features/Layout/TailwindHome';
import Post from '../features/post';
import Profile from '../features/profile';
// import SidebarNav from '../features/sidebar';

const App = () => {
  return (
    <TailwindHome />
    // <SidebarNav />
  )
}
export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/blog', element: <Home /> },
      { path: '/blog/profile', element: <Profile /> },
      { path: '/blog/post', element: <Post /> },
    ]
  }
]