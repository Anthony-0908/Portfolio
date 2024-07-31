import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';


const Routes = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>
  }
])

export default Routes;
