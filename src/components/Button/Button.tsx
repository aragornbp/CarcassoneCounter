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
      className={`text flex h-12 w-12  items-center justify-center  rounded-full text-xl text-black opacity-70 ${
        negativo ? 'bg-red-500' : 'bg-green-600'
      } ${activeIndex === index ? 'opacity-100' : ''}`}
      onClick={(event) => handleClick(event)}
    >
      {children}
    </button>
  )
}

export default Button
