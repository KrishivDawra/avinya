import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header.jsx'
import Body from './Body.jsx'
import About from './About.jsx'
import Store from './store.jsx'
import Consult from './Consult.jsx'
let allroutes = createBrowserRouter(
  [
    {
      path: '/',
      element:  <Body/>
    },
    {
      path: 'About-us',
      element:  <About/>
    },
    {
      path: 'store',
      element:  <Store/>
    },
    {
      path: 'consult',
      element:  <Consult/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allroutes}/>
  </StrictMode>,
)
