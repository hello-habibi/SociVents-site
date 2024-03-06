import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/root/Root.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Signin from './components/signin/Signin.jsx'
import Register from './components/register/Register.jsx'

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
