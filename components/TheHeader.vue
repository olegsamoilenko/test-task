<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const logOut = () => {
  authStore.logOut()
  navigateTo('/')
}
</script>

<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">DataMix</span>
          <img class="h-8 w-auto" src="/img/logo.webp" alt="" />
        </a>
      </div>
      <ul class="flex gap-x-12 list-none">
        <li class="nav-item"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/secret">Secret</NuxtLink></li>
      </ul>
      <div class="flex flex-1 justify-end">
        <NuxtLink v-if="!authStore.isAuthenticated" to="/login" class="nav-item">Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
        <button v-if="authStore.isAuthenticated" class="nav-item" @click.prevent="logOut">Log out <span aria-hidden="true">&rarr;</span></button>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>