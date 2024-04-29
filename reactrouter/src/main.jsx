import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './Github/Github'
import User from './User/User'
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path: "About",
//         element:<About/>
//       },
//       {
//         path: "Contact",
//         element:<Contact/>
//       },
//       {
//         path: "Github",
//         element:<Github/>
//       }
//     ]

//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>} />
<Route path='About' element={<About/>} />
<Route path='Contact' element={<Contact/>} />
<Route loader={githubInfoLoader} path='Github' element={<Github/>} />
<Route path='user/:userid' element={<User/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router}/>
  </React.StrictMode>,
)
