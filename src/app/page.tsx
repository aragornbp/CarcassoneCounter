'use client'
import './globals.css'
import React, { useEffect, useState } from 'react'
// import FormAddPlayers, {
//   iPlayer,
// } from '@/components/FormAddPlayers/FormAddPlayers'
import Cookies from 'js-cookie'
import Image from 'next/image'
import TableBase from '@/components/TableBase/TableBase'
import ButtonList from '@/components/ButtonList/ButtonList'
import { GiMeeple } from 'react-icons/gi'

export interface iPlayer {
  cor: string
  rua: number
  cidade: number
  igreja: number
  fazenda: number
  fada: number
  total: number
  [key: string]: any
}

export default function Home() {
  const [players, setPlayers] = useState<iPlayer[]>([])
  const [memorian, setMemorian] = useState<iPlayer[]>([])
  const [valor, setValor] = useState('0')
  const [negativo, setNegativo] = useState(false)

  useEffect(() => {
    const cookies = Cookies.get('carcassone_players')
    if (cookies) {
      setPlayers(JSON.parse(cookies))
    }
  }, [])

  useEffect(() => {
    Cookies.set('carcassone_players', JSON.stringify(players))
  }, [players])

  const handleChoosePlayer = (cor: string) => {
    const playerExist = players.find((player) => player.cor === cor)
    if (playerExist) {
      const removePlayer = players.filter((player) => player.cor !== cor)
      setPlayers(removePlayer)
    } else {
      const objPlayer: iPlayer = {
        cor,
        rua: 0,
        cidade: 0,
        igreja: 0,
        fazenda: 0,
        fada: 0,
        total: 0,
      }
      setMemorian(players)
      setPlayers([...players, objPlayer])
    }
  }

  const getButtonStyle = (color: string) => {
    return {
      color: isPlayerSelected(color) ? color : 'gray',
    }
  }

  const isPlayerSelected = (color: string) => {
    return players.some((player) => player.cor === color)
  }

  return (
    <div className="relative h-screen text-slate-200">
      <Image
        src="/assets/carcassone.jpg"
        alt="background"
        width={1980}
        height={1024}
        style={{ objectFit: 'cover', height: '100%', position: 'fixed' }}
      />
      <main className="relative z-10 flex h-full w-full flex-col gap-2 p-5 md:m-auto">
        <h1 className="text-center text-2xl font-bold text-black md:text-4xl">
          Carcassone Counter
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-2xl text-black">Selecione os jogadores</h2>
            <div className="flex gap-2">
              {['black', 'red', 'blue', '#FF0084', 'green', 'yellow'].map(
                (cor) => (
                  <button key={cor} onClick={() => handleChoosePlayer(cor)}>
                    <GiMeeple style={getButtonStyle(cor)} size={40} />
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ButtonList
              players={players}
              setPlayers={setPlayers}
              valor={valor}
              setValor={setValor}
              negativo={negativo}
              setNegativo={setNegativo}
              memorian={memorian}
            />

            <TableBase
              valor={valor}
              players={players}
              setPlayers={setPlayers}
              negativo={negativo}
              setMemorian={setMemorian}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
