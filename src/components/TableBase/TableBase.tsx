'use client'
import React from 'react'
import { iPlayer } from '../FormAddPlayers/FormAddPlayers'
import TableRow from '../TableRow/TableRow'

interface iTableBase {
  players: iPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  valor: string
  setValor: React.Dispatch<React.SetStateAction<string>>
}

const TableBase = ({ players, setPlayers, valor }: iTableBase) => {
  return (
    <div className="lg:m-w-[60%] h-[400px] w-full overflow-x-auto">
      <table className="w-full divide-y divide-slate-600 bg-slate-700">
        <thead className="whitespace-nowrap border-b border-slate-400">
          <td className="border border-slate-600 p-3 text-center">Nome</td>
          <td className="border border-slate-600 p-3 text-center">Rua</td>
          <td className="border border-slate-600 p-3 text-center">Cidade</td>
          <td className="border border-slate-600 p-3 text-center">Igreja</td>
          <td className="border border-slate-600 p-3 text-center">Fazenda</td>
          <td className="border border-slate-600 p-3 text-center">Fada</td>
          <td className="border border-slate-600 p-3 text-center">Total</td>
        </thead>
        <tbody className="whitespace-nowrap">
          {players?.length > 0 ? (
            players.map((player, index) => (
              <TableRow
                key={index}
                player={player}
                valor={valor}
                players={players}
                setPlayers={setPlayers}
              />
            ))
          ) : (
            <h2>Nenhum jogador adicionado</h2>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableBase
