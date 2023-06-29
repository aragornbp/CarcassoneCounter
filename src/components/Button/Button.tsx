import React from 'react'

interface iButtonProps {
  negativo: boolean
  func: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

const Button = ({ negativo, func, children }: iButtonProps) => {
  return (
    <button
      className={`flex h-12 w-12 items-center justify-center  rounded-full border p-3 ${
        negativo ? 'bg-red-500' : 'bg-green-600'
      }`}
      onClick={func}
    >
      {children}
    </button>
  )
}

export default Button
