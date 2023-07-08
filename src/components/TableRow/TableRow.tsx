import { iPlayer } from '@/app/page'
import React from 'react'
import { GiMeeple } from 'react-icons/gi'

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
  const meepleColor = (playerCor: string) => {
    return { color: playerCor }
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
      className="divide-y-2 divide-white text-2xl"
      style={meepleColor(player.cor)}
    >
      <td className="flex justify-center text-center">
        <GiMeeple
          className={`flex h-12 w-12 items-center justify-center rounded-full p-2 opacity-50 md:h-16 md:w-16`}
          size={40}
        />
      </td>
      {['rua', 'cidade', 'igreja', 'fazenda', 'fada', 'total'].map((item) => (
        <td key={item} className="text-center">
          <button onClick={() => handleClick({ id: item, color: player.cor })}>
            {player[item]}
          </button>
        </td>
      ))}
    </tr>
  )
}

export default TableRow
