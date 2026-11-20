import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@my-app/ui-library'

export const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Добро пожаловать в игру 2048!</h1>
      <p>Это главная страница приложения.</p>
      <Button 
        label="Начать игру" 
        onClick={() => navigate('/game')} 
      />
    </div>
  )
}