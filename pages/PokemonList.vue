<script setup lang="ts">
import { FilterOperator } from '@/types/Filter';

const filterSettings = usePokemonFilter();
const pokemons = usePokemonList();
// const filteredPokemons = computed(() => pokemons.value.filter((p) =>{
//   for(const filter of filterSettings.value) {
const filteredPokemons = computed(() => pokemons.list.filter((p) =>{
  for(const filter of filterSettings.settings) {
    switch(filter.operator) {
      case FilterOperator.Contains:
        if(!p[filter.key].toLowerCase().includes(filter.value.toLowerCase())) { return false; } 
        break;
      case FilterOperator.Equals:
        if(p[filter.key] !== filter.value) { return false; } 
        break;
      case FilterOperator.GreaterThanOrEquals:
        if(p[filter.key] < filter.value) { return false; } 
        break;
      case FilterOperator.LessThanOrEquals:
        if(p[filter.key] > filter.value) { return false; } 
        break;
    }
  }
  return true;
}));
const imageFileName = (name: string) => {
  let fileName = `/images/${name.toLowerCase()}.avif`;
  fetch(fileName).then((response) => {
  return response.ok ? fileName : ''
});
}
</script>

<template>
  <div>
    <PokemonFilter/>
    <div class="content-grid">
      <div class="content-item" v-for="pokemon in filteredPokemons" :key="pokemon.name" @click="navigateTo(`/pokemon/${pokemon.pokedex_number}`)">
        <img :src="`/images/${pokemon.name.toLowerCase().replace(`.`, '').replace(`'`, '').replace(': ', '-').replace(' ', '-').replace('♀', '-f').replace('♂', '-m')}.png`" loading="lazy"/>
        <p>{{ pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 4px 0;
}
img {
  width: 150px;
  height: 150px;
}
  .content-grid {
    padding-top: 16px;
    padding-bottom: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(166px, 1fr));
    justify-items: center;
    overflow-y: auto;
  }
  .content-item {
    padding: 8px 0;
    text-align: center;
    cursor: pointer;
  }
  .content-item:hover {
    background-color: white;
    outline: 8px outset rgba(170, 20, 20, 1);
    border-radius: 10px;
  }
</style>