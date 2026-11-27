import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Главная</Link>
        <Link to="/game" style={{ marginRight: '15px' }}>Игра</Link>
        <Link to="/history" style={{ marginRight: '15px' }}>История</Link>
        <Link to="/settings" style={{ marginRight: '15px' }}>Настройки</Link>
        <Link to="/profile">Профиль</Link>
      </nav>
      
      {/* Outlet — это специальное место, куда React Router будет вставлять текущую страницу */}
      <Outlet />
    </div>
  )
}