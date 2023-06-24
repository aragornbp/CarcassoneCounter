import React from 'react'
import { iPlayer } from '../FormAddPlayers/FormAddPlayers'

interface iTableRow {
  players: iPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  player: iPlayer
  valor: string
}

interface iProps {
  id: string
  name: string
}

const TableRow = ({ player, valor, players, setPlayers }: iTableRow) => {
  const handleClick = ({ id, name }: iProps) => {
    if (valor === '') {
      return
    }

    const playersListUpdated = players.map((player) => {
      if (player.nome === name) {
        const novoValor = player[id] + parseInt(valor)
        return {
          ...player,
          [id]: novoValor,
        }
      }
      return player
    })

    setPlayers(somarTotal(playersListUpdated).sort((a, b) => b.total - a.total))
  }
  const somarTotal = (list: iPlayer[]) => {
    return list.map((player: iPlayer) => {
      const newTotal =
        player.rua +
        player.cidade +
        player.igreja +
        player.fada +
        player.fazenda
      return {
        ...player,
        total: newTotal,
      }
    })
  }
  return (
    <tr className={`text-white ${player.cor}`}>
      <td className="border border-slate-600 p-3 text-center">{player.nome}</td>
      <td className="border border-slate-600 p-3 text-center">
        <button
          id="rua"
          onClick={() => handleClick({ id: 'rua', name: player.nome })}
        >
          {player.rua}
        </button>
      </td>

      <td className="border border-slate-600 p-3 text-center">
        <button
          id="cidade"
          onClick={() => handleClick({ id: 'cidade', name: player.nome })}
        >
          {player.cidade}
        </button>
      </td>
      <td className="border border-slate-600 p-3 text-center">
        <button
          id="igreja"
          onClick={() => handleClick({ id: 'igreja', name: player.nome })}
        >
          {player.igreja}
        </button>
      </td>
      <td className="border border-slate-600 p-3 text-center">
        <button
          id="fazenda"
          onClick={() => handleClick({ id: 'fazenda', name: player.nome })}
        >
          {player.fazenda}
        </button>
      </td>
      <td className="border border-slate-600 p-3 text-center">
        <button
          id="fada"
          onClick={() => handleClick({ id: 'fada', name: player.nome })}
        >
          {player.fada}
        </button>
      </td>
      <td className="border border-slate-600 p-3 text-center">
        {player.total}
      </td>
    </tr>
  )
}

export default TableRow
