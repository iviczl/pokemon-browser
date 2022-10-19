<script setup lang="ts">
const list = () => {
  navigateTo('/pokemonList');
};
definePageMeta( {
  // middleware: ['auth'];
});
</script>

<template>
  <div class="content">
    <h1>Welcome to the Pokemon Browser</h1>
    <h4>You can browse and search for pokemons by their features</h4>
    <button class="margin-top-m" @click="list">Go to pokemon list</button>
  </div>
</template>

<style scoped>
.content {
  color: chocolate;
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>