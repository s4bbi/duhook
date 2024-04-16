import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './pages/Homepage.jsx'
import BottomNav from './components/BottomNav.jsx'

const AppComponent = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <BottomNav />
      <Footer />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: <Homepage/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} /> 
  </React.StrictMode>,
)
