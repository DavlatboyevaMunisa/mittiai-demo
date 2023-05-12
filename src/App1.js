import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

// Import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Lets create a router
const router =createBrowserRouter([
  {
    path: '/',
    element: <><Login /></>
  },
  {
    path: '/register',
    element: <><Register /></>
  },
  {
    path: '/dashboard',
    element: <><Dashboard /></>
  },
  {
    path: '/send',
    element: <><Dashboard /></>
  },
  {
    path: '/audio',
    element: <><Dashboard /></>
  },
  {
    path: '/camera',
    element: <><Dashboard /></>
  }
  ])

function App1() {
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App1
