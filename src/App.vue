<template>
  <nav class="nav">
    <ul>
      <li><router-link :to="{name: 'home'}">Home Page</router-link></li>
      <li><router-link :to="{name: 'about'}">About Page</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.nav {
  ul {
    list-style: none;
  }
}
</style>