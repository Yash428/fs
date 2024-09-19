import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Charusat from './components/Charusat.jsx'
import Cspit from './components/Cspit.jsx'
import Depstar from './components/Depstar.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>} >
      <Route path = '' element = {<Charusat/>} />
      <Route path = 'cspit' element = {<Cspit/>} />
      <Route path = 'depstar' element = {<Depstar/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
