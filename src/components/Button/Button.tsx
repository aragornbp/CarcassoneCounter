import React from 'react'

interface iButtonProps {
  negativo: boolean
  func: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  index: number
}

const Button = ({
  negativo,
  func,
  children,
  activeIndex,
  setActiveIndex,
  index,
}: iButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(index)
    func(event)
  }
  return (
    <button
      className={`flex ${
        activeIndex === index ? 'shadow-blue border-blue-500' : ''
      } h-12 w-12 items-center justify-center  rounded-full border ${
        negativo ? 'bg-red-500' : 'bg-green-600'
      }`}
      onClick={(event) => handleClick(event)}
    >
      {children}
    </button>
  )
}

export default Button
