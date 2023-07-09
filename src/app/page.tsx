'use client'
import './globals.css'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Image from 'next/image'
import TableBase from '@/components/TableBase/TableBase'
import ButtonList from '@/components/ButtonList/ButtonList'
import { GiMeeple } from 'react-icons/gi'
import { ModalBase } from '@/components/ModalBase/ModalBase'
import Modal from '@/components/Modal'

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

const backgroundColors = [
  'bg-gray-800',
  'bg-red-500',
  'bg-blue-500',
  'bg-pink-500',
  'bg-green-500',
  'bg-yellow-500',
]

export default function Home() {
  const [players, setPlayers] = useState<iPlayer[]>([])
  const [memorian, setMemorian] = useState<iPlayer[]>([])
  const [valor, setValor] = useState('0')
  const [negativo, setNegativo] = useState(false)
  const [openModalReset, setOpenModalReset] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

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

  const removeCookies = () => {
    Cookies.remove('carcassone_players', { path: '' })
    setPlayers([])
  }

  const cleanTable = () => {
    const newTable = players.map((player) => {
      return {
        ...player,
        rua: 0,
        cidade: 0,
        igreja: 0,
        fazenda: 0,
        fada: 0,
        total: 0,
      }
    })
    setPlayers(newTable)
  }

  return (
    <>
      {openModalReset && (
        <ModalBase setOpenModal={setOpenModalReset}>
          <Modal
            frase="limpar"
            setModalOpen={setOpenModalReset}
            fun={cleanTable}
          />
        </ModalBase>
      )}
      {openModalDelete && (
        <ModalBase setOpenModal={setOpenModalDelete}>
          <Modal
            frase="deletar"
            setModalOpen={setOpenModalDelete}
            fun={removeCookies}
          />
        </ModalBase>
      )}
      <div className="relative h-screen text-slate-200">
        <Image
          src="/assets/carcassone.jpg"
          alt="background"
          width={1980}
          height={1024}
          style={{ objectFit: 'cover', height: '100%', position: 'fixed' }}
        />
        <main className="relative z-10 flex h-full w-full flex-col gap-2 p-5 md:m-auto">
          <h1 className="mt-8 text-center text-4xl font-bold text-black md:text-5xl">
            Carcassone Counter
          </h1>

          <div className="flex flex-col gap-3">
            <div className="m-auto mt-10 flex h-[146px] w-full max-w-[543px] flex-col items-center rounded-xl border bg-slate-400 bg-opacity-70">
              <h2 className="pt-4 text-[26px] font-bold text-black xl:text-3xl">
                Available Players
              </h2>
              <div className="flex gap-1 pt-4 md:gap-3">
                {['black', 'red', 'blue', '#FF0084', 'green', 'yellow'].map(
                  (cor, index) => (
                    <button key={index} onClick={() => handleChoosePlayer(cor)}>
                      <GiMeeple
                        className={`flex h-12 w-12 items-center justify-center rounded-full opacity-80 ${backgroundColors[index]} p-2 md:h-16 md:w-16`}
                        style={getButtonStyle(cor)}
                        size={40}
                      />
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <ButtonList
                players={players}
                setPlayers={setPlayers}
                valor={valor}
                setValor={setValor}
                negativo={negativo}
                setNegativo={setNegativo}
                memorian={memorian}
                cleanTable={cleanTable}
                removeCookies={removeCookies}
                setOpenModalReset={setOpenModalReset}
                setOpenModalDelete={setOpenModalDelete}
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
    </>
  )
}
