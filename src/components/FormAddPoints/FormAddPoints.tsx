import React, { useState } from 'react'
import { iPlayer } from '../FormAddPlayers/FormAddPlayers'

interface iFormAddPoints {
  setPlayers: React.Dispatch<React.SetStateAction<iPlayer[]>>
  players: iPlayer[]
}

const FormAddPoints = ({ setPlayers, players }: iFormAddPoints) => {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [valor, setValor] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const playersListUpdated = players.map((player) => {
      if (player.nome === nome) {
        const novoValor = player[tipo] + parseInt(valor)
        return {
          ...player,
          [tipo]: novoValor,
        }
      }
      return player
    })

    setPlayers(somarTotal(playersListUpdated).sort((a, b) => b.total - a.total))
  }

  const somarTotal = (list: iPlayer[]) => {
    return list.map((player: iPlayer) => {
      const newTotal =
        player.rua + player.cidade + player.padre + player.fada + player.fazenda
      return {
        ...player,
        total: newTotal,
      }
    })
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col justify-between gap-2 p-4"
    >
      <div className="flex w-[250px] justify-between gap-2 ">
        <label htmlFor="nome">Nome: </label>
        <select
          className="w-full max-w-[180px] bg-slate-500 text-center"
          name="type"
          id="type"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="selecione"
        >
          <option value="">Selecione</option>
          {players.length > 0 ? (
            players.map((player, index) => (
              <option key={index} value={player.nome}>
                {player.nome}
              </option>
            ))
          ) : (
            <option value="nulo">Add Players</option>
          )}
        </select>
      </div>
      <div className="flex w-[250px] justify-between gap-2">
        <label htmlFor="type">Tipo: </label>
        <select
          className="w-full max-w-[180px] bg-slate-500 text-center"
          name="type"
          id="type"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="rua">Rua</option>
          <option value="cidade">Cidade</option>
          <option value="padre">Padre</option>
          <option value="fazenda">Fazenda</option>
          <option value="fada">Fada</option>
        </select>
      </div>
      <div className="flex w-[250px] justify-between gap-2 ">
        <label htmlFor="valor">Valor: </label>
        <input
          className="w-full max-w-[180px] bg-slate-500 text-center"
          type="text"
          id="nome"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div className="flex w-[250px]">
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

export default FormAddPoints
