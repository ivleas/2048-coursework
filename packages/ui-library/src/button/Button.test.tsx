import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('renders label', () => {
    render(<Button label="click me" onClick={() => {}} />)
    expect(screen.getByTestId('button')).toHaveTextContent('click me')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()

    render(<Button label="click" onClick={handleClick} />)
    fireEvent.click(screen.getByTestId('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button label="disabled" onClick={() => {}} disabled={true} />)
    expect(screen.getByTestId('button')).toBeDisabled()
  })
})