import React from 'react'

interface iModalProps {
  frase: String
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  fun: () => void
}

const Modal = ({ frase, setModalOpen, fun }: iModalProps) => {
  const closeModal = () => {
    fun()
    setModalOpen(false)
  }
  return (
    <div className="flex flex-col p-4">
      <p
        className="absolute right-4 top-4 text-2xl text-white "
        onClick={() => setModalOpen(false)}
      >
        X
      </p>
      <h2 className="mt-6 text-2xl text-white">
        Você deseja {frase} a tabela?
      </h2>
      <button className="mt-8 text-4xl text-red-600" onClick={closeModal}>
        SIM
      </button>
    </div>
  )
}

export default Modal
