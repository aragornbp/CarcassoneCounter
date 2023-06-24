import React from 'react'
import { iPlayer } from '../FormAddPlayers/FormAddPlayers'
import Cookies from 'js-cookie'

interface iButtonList {
  players: iPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  valor: string
  setValor: React.Dispatch<React.SetStateAction<string>>
}

const ButtonList = ({ valor, setValor, players, setPlayers }: iButtonList) => {
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
  return (
    <div className="flex-row-wrap m-auto flex h-12 w-full max-w-[400px] justify-between gap-6 lg:m-0 lg:w-[10%] lg:flex-col lg:items-center">
      <div className="flex h-full w-24 justify-center">
        <input
          className="w-full rounded border bg-slate-600 p-1 text-center"
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={removeCookies}
        >
          Apagar
        </button>
      </div>
      <div className="flex w-24 items-center justify-center">
        <button
          className="h-full w-full rounded border bg-slate-600 p-2 "
          onClick={cleanTable}
        >
          Limpar
        </button>
      </div>
    </div>
  )
}

export default ButtonList
