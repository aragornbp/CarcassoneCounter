import React, { useState } from 'react'

import { Eraser, Trash2, UndoDot, ArrowUpToLine } from 'lucide-react'
import Button from '../Button/Button'
import { iPlayer } from '@/app/page'

interface iButtonList {
  players: iPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  valor: string
  setValor: React.Dispatch<React.SetStateAction<string>>
  negativo: boolean
  setNegativo: React.Dispatch<React.SetStateAction<boolean>>
  memorian: iPlayer[]
  cleanTable: () => void
  removeCookies: () => void
  setOpenModalReset: React.Dispatch<React.SetStateAction<boolean>>
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonList = ({
  valor,
  setValor,
  players,
  setPlayers,
  negativo,
  setNegativo,
  memorian,
  cleanTable,
  removeCookies,
  setOpenModalReset,
  setOpenModalDelete,
}: iButtonList) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleNegativo = () => {
    negativo ? setNegativo(false) : setNegativo(true)
    const newValor = -1 * parseInt(valor)
    setValor(String(newValor))
  }

  const handleMemoria = () => {
    setPlayers(memorian)
  }

  const handleGetValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      handleValor(event.target.innerText)
    }
  }

  const handleValor = (valorAgora: string) => {
    setValor(valorAgora)
  }

  const sortPlayers = () => {
    const sortedPlayers = players.sort((a, b) => b.total - a.total)
    setPlayers(sortedPlayers)
    setValor('0')
  }
  return (
    <div className="flex h-full w-full flex-col flex-wrap gap-1 px-2 py-4 md:max-w-[1120px] md:py-0">
      <button
        className={`h-12 w-12 items-center justify-center rounded-full text-4xl  font-normal text-black opacity-80 ${
          negativo ? 'bg-red-500' : 'bg-green-600'
        }`}
        onClick={handleNegativo}
      >
        {negativo ? '-' : '+'}
      </button>
      {[1, 2, 3, 5, 10].map((value, index) => (
        <Button
          key={index}
          negativo={negativo}
          func={handleGetValue}
          setActiveIndex={setActiveIndex}
          index={index}
          activeIndex={activeIndex}
        >
          {negativo ? -value : value}
        </Button>
      ))}

      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black  opacity-70"
        onClick={sortPlayers}
      >
        <ArrowUpToLine />
      </button>
      <button
        className="flex  h-12 w-12 items-center justify-center rounded-full bg-white text-black  opacity-70"
        onClick={handleMemoria}
      >
        <UndoDot />
      </button>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-70"
        onClick={() => setOpenModalReset(true)}
      >
        <Eraser />
      </button>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black  opacity-70"
        onClick={() => setOpenModalDelete(true)}
      >
        <Trash2 />
      </button>
    </div>
  )
}

export default ButtonList
