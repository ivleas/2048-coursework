import React from 'react'

// интерфейс для пропсов кнопки
export interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

// сам компонент
export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} data-testid="button">
      {label}
    </button>
  )
}