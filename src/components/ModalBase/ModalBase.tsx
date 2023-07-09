import React, { ReactNode } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'

interface iModalProps {
  children: ReactNode
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalBase = ({ children, setOpenModal }: iModalProps) => {
  const modalRef = useOutsideClick(() => {
    setOpenModal(false)
  })

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div className="flex h-screen w-full items-start justify-center bg-opacity-50">
        <div
          className="relative m-auto flex h-[250px] w-[250px] items-center justify-center rounded-xl bg-gray-600 py-0"
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
