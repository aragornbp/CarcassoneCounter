'use client'
import React, { ChangeEvent, useState } from 'react'

export interface iPlayer {
  nome: string
  cor: string
  rua: number
  cidade: number
  padre: number
  fazenda: number
  fada: number
  total: number
  [key: string]: any
}

interface iFormAddPlayer {
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  players: iPlayer[]
}

const FormAddPlayers = ({ setPlayers, players }: iFormAddPlayer) => {
  const [selectedColor, setSelectedColor] = useState('bg-black')
  const [nome, setNome] = useState('')

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const objPlayer: iPlayer = {
      nome,
      cor: selectedColor,
      rua: 0,
      cidade: 0,
      padre: 0,
      fazenda: 0,
      fada: 0,
      total: 0,
    }
    console.log(objPlayer)

    setPlayers([...players, objPlayer])
    setNome('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex h-full flex-col justify-between gap-2 p-4"
    >
      <div className="flex w-[250px] justify-between gap-2 ">
        <label htmlFor="nome">Nome: </label>
        <input
          className="w-full max-w-[180px] bg-slate-500 text-center"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="flex w-[250px] justify-between gap-2">
        <label htmlFor="Cor">Cor: </label>
        <select
          name="color"
          id="color"
          value={selectedColor}
          onChange={handleColorChange}
          className={`w-[250px] max-w-[180px] ${selectedColor}`}
        >
          <option className="bg-black" value="bg-black"></option>
          <option className="bg-red-700" value="bg-red-700"></option>
          <option className="bg-blue-700" value="bg-blue-700"></option>
          <option className="bg-green-700" value="bg-green-700"></option>
          <option className="bg-yellow-400" value="bg-yellow-300"></option>
          <option className="bg-pink-500" value="bg-pink-500"></option>
        </select>
      </div>
      <div className="flex w-[250px] justify-between">
        <button
          type="submit"
          className="w-full rounded-md border bg-slate-500 p-1"
        >
          {' '}
          Add
        </button>
      </div>
    </form>
  )
}

export default FormAddPlayers
