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
    setPlayers(somarTotal(playersListUpdated))
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
  // cores comentadas, isto serve apenas para o tailwind entender que existem essas cores
  // const colors = [
  //   'bg-black',
  //   'bg-red-600',
  //   'bg-blue-600',
  //   'bg-pink-600',
  //   'bg-green-600',
  //   'bg-yellow-600',
  // ]

  return (
    <tr
      className={` text-white bg-${
        player.cor === 'black'
          ? 'black'
          : player.cor === '#FF0084'
          ? 'pink-600'
          : `${player.cor}-600`
      }`}
    >
      {/* <td className="border border-slate-600 p-1 text-center">{player.nome}</td> */}
      {['rua', 'cidade', 'igreja', 'fazenda', 'fada', 'total'].map((item) => (
        <td key={item} className="border border-slate-600 p-1 text-center">
          <button onClick={() => handleClick({ id: item, color: player.cor })}>
            {player[item]}
          </button>
        </td>
      ))}
    </tr>
  )
}

export default TableRow
