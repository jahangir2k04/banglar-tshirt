import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Main from './components/Layout/Main'
import About from './components/About/About'
import Order from './components/Order/Order'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('tshirts.json'),
      },
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'about',
        element: <About />,
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
