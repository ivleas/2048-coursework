import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Game } from './pages/Game'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Settings } from './pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'game', element: <Game /> },
      { path: 'history', element: <History /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile', element: <Profile /> }
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}