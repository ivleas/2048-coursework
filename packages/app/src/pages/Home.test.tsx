import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'

const future = {
  v7_startTransition: true,
  v7_relativeSplatPath: true
}

describe('Home', () => {
  it('renders welcome message', () => {
    render(
      <BrowserRouter future={future}>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Добро пожаловать в игру 2048!')).toBeInTheDocument()
  })

  it('renders start game button', () => {
    render(
      <BrowserRouter future={future}>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Начать игру')).toBeInTheDocument()
  })
})