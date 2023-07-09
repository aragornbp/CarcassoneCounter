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
    <div className="h-max-[400px] m-auto mt-4 h-fit w-full max-w-[1120px] overflow-x-auto rounded-xl border text-xl text-black">
      <table className="w-full  rounded-xl bg-slate-400 opacity-90">
        <thead className="whitespace-nowrap">
          <td className=" p-1 text-center">Player</td>
          <td className="w-[16%]  p-1 text-center">
            <div className="flex flex-col items-center justify-center">
              <GiMountainRoad size={24} />
              Rua
            </div>
          </td>
          <td className="w-[16%]  p-1 text-center">
            <div className="flex flex-col items-center justify-center">
              <MdOutlineCastle size={24} />
              Cidade
            </div>
          </td>
          <td className="w-[16%]  p-1 text-center">
            <div className="flex flex-col items-center justify-center">
              <Church strokeWidth={1.25} />
              igreja
            </div>
          </td>
          <td className="w-[16%] p-1 text-center">
            <div className="flex flex-col items-center justify-center">
              <GiFarmer size={24} />
              Fazenda
            </div>
          </td>
          <td className="w-[16%] p-1 text-center">
            <div className="flex flex-col items-center justify-center">
              <GiFairy size={24} />
              Fada
            </div>
          </td>
          <td className="w-full  p-1 text-center">Total</td>
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
