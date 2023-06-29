import React from 'react'

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

  const handleValor = (valorAgora: string) => {
    setValor(valorAgora)
  }

  const handleNegativo = () => {
    negativo ? setNegativo(false) : setNegativo(true)
  }

  const handleMemoria = () => {
    setPlayers(memorian)
  }

  const handleGetValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      console.log(event.target.innerText)
      handleValor(event.target.innerText)
    }
  }
  return (
    <div className="flex h-fit w-full justify-between gap-4 overflow-x-auto">
      <Button func={handleNegativo} negativo={negativo}>
        {negativo ? '-' : '+'}
      </Button>
      <Button func={handleGetValue} negativo={negativo}>
        {negativo ? -1 : +1}
      </Button>
      <Button func={handleGetValue} negativo={negativo}>
        {negativo ? -2 : +2}
      </Button>
      <Button func={handleGetValue} negativo={negativo}>
        {negativo ? -3 : +3}
      </Button>
      <Button func={handleGetValue} negativo={negativo}>
        {negativo ? -5 : +5}
      </Button>
      <Button func={handleGetValue} negativo={negativo}>
        {negativo ? -10 : +10}
      </Button>

      <button
        className="flex  h-12 w-12  justify-center rounded-full border bg-slate-600 p-3"
        onClick={handleMemoria}
      >
        <UndoDot />
      </button>
      <button
        className="flex h-12 w-12  justify-center rounded-full border bg-slate-600 p-3 "
        onClick={removeCookies}
      >
        <Trash2 />
      </button>
      <button
        className="flex h-12 w-12 justify-center rounded-full border bg-slate-600 p-3 "
        onClick={cleanTable}
      >
        <Eraser />
      </button>
    </div>
  )
}

export default ButtonList
