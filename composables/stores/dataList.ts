import { defineStore } from 'pinia';

export const usePokemonList = defineStore('pokemons', () => ({ list: [] }));
export const usePokemonFilter = defineStore('pokemonfilter', () => ({ settings: [] }));
