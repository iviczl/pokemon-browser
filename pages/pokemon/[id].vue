<script setup lang="ts">
const route = useRoute();
const pokemon = usePokemonList().value.find(p => p.pokedex_number === parseInt(route.params.id as string));
</script>

<template>
<div>
  <div class="detail-container">
    <figure>
      <figcaption><h2>{{ pokemon.name }}</h2></figcaption>
      <img :src="`/images/${pokemon.name.toLowerCase().replace(`.`, '').replace(`'`, '').replace(': ', '-').replace(' ', '-').replace('♀', '-f').replace('♂', '-m')}.png`" 
        loading="lazy" width="475" height="475"/>
    </figure>
    <article class="prop-container">
      <p class="prop-row"><span class="prop-label">Abilities:</span><span class="prop-value">{{ pokemon.abilities }}</span></p>
      <p class="prop-row"><span class="prop-label">Against bug:</span><span class="prop-value">{{ pokemon.against_bug }}</span></p>
      <p class="prop-row"><span class="prop-label">Against dark:</span><span class="prop-value">{{ pokemon.against_dark }}</span></p>
      <p class="prop-row"><span class="prop-label">Against dragon:</span><span class="prop-value">{{ pokemon.against_dragon }}</span></p>
      <p class="prop-row"><span class="prop-label">Against electric:</span><span class="prop-value">{{ pokemon.against_electric }}</span></p>
      <p class="prop-row"><span class="prop-label">Against fairy:</span><span class="prop-value">{{ pokemon.against_fairy }}</span></p>
      <p class="prop-row"><span class="prop-label">Against fight:</span><span class="prop-value">{{ pokemon.against_fight }}</span></p>
      <p class="prop-row"><span class="prop-label">Against fire:</span><span class="prop-value">{{ pokemon.against_fire }}</span></p>
      <p class="prop-row"><span class="prop-label">Against flying:</span><span class="prop-value">{{ pokemon.against_flying }}</span></p>
      <p class="prop-row"><span class="prop-label">Against ghost:</span><span class="prop-value">{{ pokemon.against_ghost }}</span></p>
      <p class="prop-row"><span class="prop-label">Against grass:</span><span class="prop-value">{{ pokemon.against_grass }}</span></p>
      <p class="prop-row"><span class="prop-label">Against ground:</span><span class="prop-value">{{ pokemon.against_ground }}</span></p>
      <p class="prop-row"><span class="prop-label">Against ice:</span><span class="prop-value">{{ pokemon.against_ice }}</span></p>
      <p class="prop-row"><span class="prop-label">Against normal:</span><span class="prop-value">{{ pokemon.against_normal }}</span></p>
      <p class="prop-row"><span class="prop-label">Against poison:</span><span class="prop-value">{{ pokemon.against_poison }}</span></p>
      <p class="prop-row"><span class="prop-label">Against psychic:</span><span class="prop-value">{{ pokemon.against_psychic }}</span></p>
      <p class="prop-row"><span class="prop-label">Against rock:</span><span class="prop-value">{{ pokemon.against_rock }}</span></p>
      <p class="prop-row"><span class="prop-label">Against steel:</span><span class="prop-value">{{ pokemon.against_steel }}</span></p>
      <p class="prop-row"><span class="prop-label">Attack:</span><span class="prop-value">{{ pokemon.attack }}</span></p>
      <p class="prop-row"><span class="prop-label">Base egg steps:</span><span class="prop-value">{{ pokemon.base_egg_steps }}</span></p>
      <p class="prop-row"><span class="prop-label">Base happiness:</span><span class="prop-value">{{ pokemon.base_happiness }}</span></p>
      <p class="prop-row"><span class="prop-label">Base total:</span><span class="prop-value">{{ pokemon.base_total }}</span></p>
      <p class="prop-row"><span class="prop-label">Capture rate:</span><span class="prop-value">{{ pokemon.capture_rate }}</span></p>
      <p class="prop-row"><span class="prop-label">Classification:</span><span class="prop-value">{{ pokemon.classfication }}</span></p>
      <p class="prop-row"><span class="prop-label">Defense:</span><span class="prop-value">{{ pokemon.defense }}</span></p>
      <p class="prop-row"><span class="prop-label">Experience growth:</span><span class="prop-value">{{ pokemon.experience_growth }}</span></p>
      <p class="prop-row"><span class="prop-label">Generation:</span><span class="prop-value">{{ pokemon.generation }}</span></p>
      <p class="prop-row"><span class="prop-label">Height m:</span><span class="prop-value">{{ pokemon.height_m }}</span></p>
      <p class="prop-row"><span class="prop-label">HP:</span><span class="prop-value">{{ pokemon.hp }}</span></p>
      <p class="prop-row"><span class="prop-label">Is legendary:</span><span class="prop-value">{{ pokemon.is_legendary }}</span></p>
      <p class="prop-row"><span class="prop-label">Japanese name:</span><span class="prop-value">{{ pokemon.japanese_name }}</span></p>
      <p class="prop-row"><span class="prop-label">Percentage male:</span><span class="prop-value">{{ pokemon.percentage_male }}</span></p>
      <p class="prop-row"><span class="prop-label">Sp attack</span><span class="prop-value">{{ pokemon.sp_attack }}</span></p>
      <p class="prop-row"><span class="prop-label">Sp defense:</span><span class="prop-value">{{ pokemon.sp_defense }}</span></p>
      <p class="prop-row"><span class="prop-label">Speed:</span><span class="prop-value">{{ pokemon.speed }}</span></p>
      <p class="prop-row"><span class="prop-label">Type 1:</span><span class="prop-value">{{ pokemon.type1 }}</span></p>
      <p class="prop-row"><span class="prop-label">Type 2:</span><span class="prop-value">{{ pokemon.type2 }}</span></p>
      <p class="prop-row"><span class="prop-label">Weight kg:</span><span class="prop-value">{{ pokemon.weight_kg }}</span></p>
      <p class="prop-row"><button @click="navigateTo('/pokemonList')">Back to pokemon list</button></p>
    </article>  
  </div>
</div>
</template>

<style scoped>
.prop-label {
  flex: 1
}
.prop-value {
  flex: 1.5;
}
.prop-row {
  display: flex;
  flex-direction: row;
}
.prop-container {
  column-width: 20rem;
  max-height: calc(100vh - 1.5rem);
  column-count: 3;
}
.detail-container {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
}
</style>