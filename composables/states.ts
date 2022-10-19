import { Pokemon } from "@/types/Pokemon";
import { Filter } from "@/types/Filter";

export const useAuth = () => useState('auth', () => ({
  isLoggedIn: false,
  token: null as string
}));

export const usePokemonList = () => useState<Pokemon[]>('pokemons', () => []);
export const usePokemonFilter = () => useState<Filter[]>('pokemonfilter', () => []);
