import React, { useState } from 'react'

import Cookies from 'js-cookie'
import { Eraser, Trash2, UndoDot } from 'lucide-react'
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
}

const ButtonList = ({
  valor,
  setValor,
  players,
  setPlayers,
  negativo,
  setNegativo,
  memorian,
}: iButtonList) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const removeCookies = () => {
    Cookies.remove('carcassone_players', { path: '' })
    setPlayers([])
  }

  const cleanTable = () => {
    const newTable = players.map((player) => {
      return {
        ...player,
        rua: 0,
        cidade: 0,
        igreja: 0,
        fazenda: 0,
        fada: 0,
        total: 0,
      }
    })
    setPlayers(newTable)
  }

  const handleNegativo = () => {
    negativo ? setNegativo(false) : setNegativo(true)
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
    <div className="flex h-fit w-full flex-wrap justify-around gap-2">
      <button
        className={`h-12 w-12 items-center justify-center  rounded-full border ${
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
        className="flex  h-12 w-12 items-center justify-center rounded-full border bg-slate-600"
        onClick={sortPlayers}
      >
        Up
      </button>
      <button
        className="flex  h-12 w-12 items-center justify-center rounded-full border bg-slate-600"
        onClick={handleMemoria}
      >
        <UndoDot />
      </button>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-slate-600"
        onClick={cleanTable}
      >
        <Eraser />
      </button>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-slate-600"
        onClick={removeCookies}
      >
        <Trash2 />
      </button>
    </div>
  )
}

export default ButtonList
