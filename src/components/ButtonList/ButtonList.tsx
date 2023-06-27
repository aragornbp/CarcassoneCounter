import React from 'react'
import { iPlayer } from '../FormAddPlayers/FormAddPlayers'
import Cookies from 'js-cookie'
import { Eraser, Trash2, UndoDot } from 'lucide-react'

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
  return (
    <div className="m-auto flex w-full flex-wrap justify-between gap-6 sm:flex-nowrap sm:gap-1 lg:m-0 lg:w-[10%] lg:flex-col lg:items-center">
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className={`h-full w-full rounded border ${
            negativo ? 'bg-red-500' : 'bg-green-600'
          } p-2  `}
          onClick={handleNegativo}
        >
          {negativo ? '-' : '+'}
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={(event) => {
            if (event.target instanceof HTMLButtonElement) {
              handleValor(event.target.innerText)
            }
          }}
        >
          {negativo ? -1 : +1}
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={(event) => {
            if (event.target instanceof HTMLButtonElement) {
              handleValor(event.target.innerText)
            }
          }}
        >
          {negativo ? -2 : +2}
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={(event) => {
            if (event.target instanceof HTMLButtonElement) {
              handleValor(event.target.innerText)
            }
          }}
        >
          {negativo ? -3 : +3}
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={(event) => {
            if (event.target instanceof HTMLButtonElement) {
              handleValor(event.target.innerText)
            }
          }}
        >
          {negativo ? -5 : +5}
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={(event) => {
            if (event.target instanceof HTMLButtonElement) {
              handleValor(event.target.innerText)
            }
          }}
        >
          {negativo ? -10 : +10}
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          id="btn1"
          className="flex h-full w-full justify-center rounded border bg-slate-600 p-2"
          onClick={handleMemoria}
        >
          <UndoDot />
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          className="flex h-full w-full justify-center rounded border bg-slate-600 p-2 "
          onClick={removeCookies}
        >
          <Trash2 />
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          className="flex h-full w-full justify-center rounded border bg-slate-600 p-2 "
          onClick={cleanTable}
        >
          <Eraser />
        </button>
      </div>
    </div>
  )
}

export default ButtonList
