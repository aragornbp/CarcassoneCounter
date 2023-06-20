import React from 'react'
import { iPlayer } from '../FormAddPlayers/FormAddPlayers'

interface iTableRow {
  player: iPlayer
}

const TableRow = ({ player }: iTableRow) => {
  return (
    <tr className={`text-white ${player.cor}`}>
      <td className="border border-slate-600 p-3 text-center">{player.nome}</td>
      <td className="border border-slate-600 p-3 text-center">{player.rua}</td>
      <td className="border border-slate-600 p-3 text-center">
        {player.cidade}
      </td>
      <td className="border border-slate-600 p-3 text-center">
        {player.igreja}
      </td>
      <td className="border border-slate-600 p-3 text-center">
        {player.fazenda}
      </td>
      <td className="border border-slate-600 p-3 text-center">{player.fada}</td>
      <td className="border border-slate-600 p-3 text-center">
        {player.total}
      </td>
    </tr>
  )
}

export default TableRow
