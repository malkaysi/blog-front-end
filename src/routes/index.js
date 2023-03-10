import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from "../features/home"
import { protectedRoutes } from './protectedRoutes';

export const AppRoutes = () => {
  // Right now this points to home, but will be pointed to Landing or protectedRoutes depending on if the user is authorized
  const commonRoutes = [{path: '/', element: <Home /> }];
  
  // If we need to add public routes we can check auth for them here
  const routes = protectedRoutes;
  const element = useRoutes([...routes, ...commonRoutes])

  return(element)
}
