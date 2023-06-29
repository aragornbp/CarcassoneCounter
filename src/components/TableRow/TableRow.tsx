import { iPlayer } from '@/app/page'
import React from 'react'

interface iTableRow {
  players: iPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  player: iPlayer
  valor: string
  negativo: boolean
  setMemorian: React.Dispatch<React.SetStateAction<iPlayer[]>>
}

interface iProps {
  id: string
  color: string
}

const TableRow = ({
  player,
  valor,
  players,
  setPlayers,
  negativo,
  setMemorian,
}: iTableRow) => {
  const handleClick = ({ id, color }: iProps) => {
    if (valor === '') {
      return
    }

    const playersListUpdated = players.map((player) => {
      if (player.cor === color) {
        const novoValor = player[id] + parseInt(valor)
        return {
          ...player,
          [id]: novoValor,
        }
      }
      return player
    })

    setMemorian(players)
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
      <td className="border border-slate-600 p-1 text-center">{player.nome}</td>
      <td className="border border-slate-600 p-1 text-center">
        <button
          id="rua"
          onClick={() => handleClick({ id: 'rua', color: player.cor })}
        >
          {player.rua}
        </button>
      </td>

      <td className="border border-slate-600 p-1 text-center">
        <button
          id="cidade"
          onClick={() => handleClick({ id: 'cidade', color: player.cor })}
        >
          {player.cidade}
        </button>
      </td>
      <td className="border border-slate-600 p-1 text-center">
        <button
          id="igreja"
          onClick={() => handleClick({ id: 'igreja', color: player.cor })}
        >
          {player.igreja}
        </button>
      </td>
      <td className="border border-slate-600 p-1 text-center">
        <button
          id="fazenda"
          onClick={() => handleClick({ id: 'fazenda', color: player.cor })}
        >
          {player.fazenda}
        </button>
      </td>
      <td className="border border-slate-600 p-1 text-center">
        <button
          id="fada"
          onClick={() => handleClick({ id: 'fada', color: player.cor })}
        >
          {player.fada}
        </button>
      </td>
      <td className="border border-slate-600 p-1 text-center">
        {player.total}
      </td>
    </tr>
  )
}

export default TableRow
