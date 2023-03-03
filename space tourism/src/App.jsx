import { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
//Layout
import RootLayout from './layout/RootLayout'

//Pages
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Tech from './pages/Tech'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='destination' element={<Destination/>}/>
      <Route path='crew' element={<Crew/>}/>
      <Route path='technology' element={<Tech/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
