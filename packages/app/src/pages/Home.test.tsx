import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'

describe('Home', () => {
  it('renders welcome message', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Добро пожаловать в игру 2048!')).toBeInTheDocument()
  })

  it('renders start game button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Начать игру')).toBeInTheDocument()
  })
})