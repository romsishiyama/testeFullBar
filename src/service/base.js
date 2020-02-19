
import axios from 'axios'

const config = {
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPokemon(inputInicial, inputFinal) {
  const url = `./?offset=${inputInicial}&limit=${inputFinal}`
  return protocolo.get(url)
}