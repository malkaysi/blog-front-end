import React from 'react';
import Home from '../features/home';
import MainLayout from '../features/Layout/MainLayout';
import Post from '../features/post';
import Profile from '../features/profile';

const App = () => {
  return (
    <MainLayout />
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