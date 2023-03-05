<script setup lang="ts">
const auth = useAuth();
const logout = () => {
  // auth.value.isLoggedIn = false;
  auth.isLoggedIn = false;
}
</script>

<template>
  <div class="layout">
    <div class="header" v-if="auth.isLoggedIn">
      <NuxtLink class="menu-item" href="/">Pokemon Browser</NuxtLink>
      <a href="#" @click="logout">Logout</a>
      <NuxtLink class="menu-item" href="/about">About</NuxtLink>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.layout {
  max-height: 100vh;
}
.content {
  max-height: calc(100vh - 1.5rem);
  overflow-y: auto;
  overflow-x: hidden;
}
a {
  color: whitesmoke !important;
  text-decoration: none !important;
}
.header {
  background: navy;
  color: whitesmoke !important;
  text-decoration: none !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 1.5rem;
  /* align-items:; */
}
.menu-item {
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-self: flex-end;
}
</style>