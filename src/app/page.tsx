'use client'
import './globals.css'
import React, { useEffect, useState } from 'react'
import FormAddPlayers, {
  iPlayer,
} from '@/components/FormAddPlayers/FormAddPlayers'
import Cookies from 'js-cookie'
import Image from 'next/image'
import TableBase from '@/components/TableBase/TableBase'
import ButtonList from '@/components/ButtonList/ButtonList'

export default function Home() {
  const [players, setPlayers] = useState<iPlayer[]>([])
  const [valor, setValor] = useState('0')

  useEffect(() => {
    const cookies = Cookies.get('carcassone_players')
    if (cookies) {
      setPlayers(JSON.parse(cookies))
    }
  }, [])

  useEffect(() => {
    Cookies.set('carcassone_players', JSON.stringify(players))
  }, [players])

  return (
    <div className="relative h-screen text-slate-200">
      <Image
        src="/assets/carcassone.jpg"
        alt="background"
        fill
        style={{ objectFit: 'cover' }}
      />
      <main className="relative z-10 flex h-full w-full flex-col gap-2 p-5 md:m-auto">
        <h1 className="text-center text-2xl font-bold text-black md:text-4xl">
          Carcassone Counter
        </h1>
        <div className="flex flex-col gap-5 lg:m-auto lg:flex-row-reverse lg:justify-between">
          <FormAddPlayers setPlayers={setPlayers} players={players} />

          <ButtonList
            players={players}
            setPlayers={setPlayers}
            valor={valor}
            setValor={setValor}
          />

          <TableBase
            setValor={setValor}
            valor={valor}
            setPlayers={setPlayers}
            players={players}
          />
        </div>
      </main>
    </div>
  )
}
