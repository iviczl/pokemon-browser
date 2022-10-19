<script setup lang="ts">
import { Pokemon } from './types/Pokemon';
// const { data } = await useAsyncData('pokemons', () => queryContent().findOne());
// const { data } = await useAsyncData('pokemons', () => $fetch('/data/pokemon.json'));
// const data = await import('~/data/pokemon.json');
const { data } = await useFetch('/pokemons');
const pokemons = usePokemonList();
pokemons.value.length = 0;
// pokemons.value.push(...(data.default as Pokemon[]));
pokemons.value.push(...(data.value.default as Pokemon[]));
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
