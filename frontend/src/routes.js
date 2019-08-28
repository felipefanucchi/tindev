import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

export default function Routes() {
  const routes = [
    {
      exact: true,
      path: '/',
      componentName: Login
    },
    {
      exact: true,
      path: '/devs/:id',
      componentName: Main
    }
  ];

  return (
    <BrowserRouter>
      {routes.map(route => (
        <Route path={route.path}
          exact={route.exact ? true : null} 
          component={route.componentName} 
        />
      ))}
    </BrowserRouter>
  );
}
