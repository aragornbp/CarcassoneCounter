'use client'
import React, { useEffect, useState } from 'react'
import FormAddPlayers, {
  iPlayer,
} from '@/components/FormAddPlayers/FormAddPlayers'
import FormAddPoints from '@/components/FormAddPoints/FormAddPoints'
import TableRow from '@/components/TableRow/TableRow'
import Cookies from 'js-cookie'

export default function Home() {
  const [players, setPlayers] = useState<iPlayer[]>([])

  useEffect(() => {
    const cookies = Cookies.get('carcassone_players')
    if (cookies) {
      setPlayers(JSON.parse(cookies))
    }
  }, [])

  useEffect(() => {
    Cookies.set('carcassone_players', JSON.stringify(players))
  }, [players])

  const removeCookies = () => {
    Cookies.remove('carcassone_players', { path: '' })
    setPlayers([])
  }
  return (
    <div className="h-screen bg-slate-800 text-slate-200">
      <main className="flex flex-col justify-center gap-2 p-5">
        <h1 className="text-center text-2xl font-bold">Carcassone Counter</h1>
        <div className="flex w-full flex-col justify-around md:flex-row">
          <div>
            <h2 className="p-2">Adicione Jogadores</h2>
            <section className="h-44 rounded-lg border border-cyan-300 bg-slate-700">
              <FormAddPlayers setPlayers={setPlayers} players={players} />
            </section>
          </div>
          <div>
            <h2 className="p-2">Adicione Pontos</h2>
            <section className="h-44 rounded-lg border border-cyan-300 bg-slate-700">
              <FormAddPoints setPlayers={setPlayers} players={players} />
            </section>
          </div>
        </div>
        <h2 className="p-2">Game</h2>
        <section className=" w-full max-w-full overflow-x-auto rounded-lg border border-cyan-300">
          <table className="w-full divide-y divide-slate-600 bg-slate-700">
            <thead className="whitespace-nowrap border-b border-slate-400">
              <td className="border border-slate-600 p-3 text-center">Nome</td>
              <td className="border border-slate-600 p-3 text-center">Rua</td>
              <td className="border border-slate-600 p-3 text-center">
                Cidade
              </td>
              <td className="border border-slate-600 p-3 text-center">Padre</td>
              <td className="border border-slate-600 p-3 text-center">
                Fazenda
              </td>
              <td className="border border-slate-600 p-3 text-center">Fada</td>
              <td className="border border-slate-600 p-3 text-center">Total</td>
            </thead>
            <tbody className="whitespace-nowrap">
              {players?.length > 0 ? (
                players.map((player, index) => (
                  <TableRow key={index} player={player} />
                ))
              ) : (
                <h2>Nenhum jogador adicionado</h2>
              )}
            </tbody>
          </table>
        </section>
        <div className="flex w-full justify-center p-2">
          <button
            className="rounded border bg-slate-600 p-1 "
            onClick={removeCookies}
          >
            Limpar
          </button>
        </div>
      </main>
    </div>
  )
}
