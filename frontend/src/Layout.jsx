import React from 'react'
import Sidebar from './Components/Sidebar/SIdeBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Layout