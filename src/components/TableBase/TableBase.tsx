'use client'
import React from 'react'

import TableRow from '../TableRow/TableRow'
import { Church } from 'lucide-react'
import { GiFairy, GiFarmer, GiMountainRoad } from 'react-icons/gi'
import { MdOutlineCastle } from 'react-icons/md'
import { iPlayer } from '@/app/page'

interface iTableBase {
  players: iPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  valor: string
  negativo: boolean
  setMemorian: React.Dispatch<React.SetStateAction<iPlayer[]>>
}

const TableBase = ({
  players,
  setPlayers,
  valor,
  negativo,
  setMemorian,
}: iTableBase) => {
  return (
    <div className="h-[400px] w-full overflow-x-auto">
      <table className="w-full divide-y divide-slate-600 bg-slate-700">
        <thead className="whitespace-nowrap border-b border-slate-400">
          <td className="border border-slate-600 p-1 text-center">Nome</td>
          <td className="border border-slate-600 p-1 text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <GiMountainRoad size={24} />
              Rua
            </div>
          </td>
          <td className="border border-slate-600 p-1 text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <MdOutlineCastle size={24} />
              Cidade
            </div>
          </td>
          <td className="border border-slate-600 p-1 text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <Church strokeWidth={1.25} />
              igreja
            </div>
          </td>
          <td className="border border-slate-600 p-1 text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <GiFarmer size={24} />
              Fazenda
            </div>
          </td>
          <td className="border border-slate-600 p-1 text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <GiFairy size={24} />
              Fada
            </div>
          </td>
          <td className="border border-slate-600 p-1 text-center">Total</td>
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
                negativo={negativo}
                setMemorian={setMemorian}
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
