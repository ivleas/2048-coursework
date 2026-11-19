import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import { History } from './pages/History'
import { Settings } from './pages/Settings'
import { Profile } from './pages/Profile'

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
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
})
export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}