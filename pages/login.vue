<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { onBeforeRouteLeave } from 'vue-router'
import Cookies from 'js-cookie'

const authStore = useAuthStore()
const loginMessage = ref<string | null>(Cookies.get('loginMessage') || null)

const { errors, defineInputBinds, handleSubmit } = useLoginForm()
const email = defineInputBinds('email')
const password = defineInputBinds('password')

const onSubmit = handleSubmit((values: {email: string, password: string}) => {
  Cookies.remove('loginMessage')
  loginMessage.value = null

  const loginSuccess = authStore.logIn(values)

  if (loginSuccess) {
    authStore.error = null
    navigateTo('/')
  }
})

onBeforeRouteLeave(() => {
  Cookies.remove('loginMessage')
  authStore.error = null
})
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/img/logo.webp" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
        account</h2>
      <span v-if="loginMessage" class="text-red-600">{{ loginMessage }}</span>
      <span v-if="authStore.error" class="text-red-600">{{ authStore.error }}</span>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="onSubmit()">
        <div>
          <label for="email" class="login-form-input-label">Email address</label>
          <div class="mt-2">
            <input name="email" v-bind="email"
                   class="login-form-input"/>
            <span v-if="errors.email" class="text-red-600">{{ errors.email}}</span>
          </div>
        </div>
        <div class="mt-2">
          <label for="password" class="login-form-input-label">Password</label>
          <input name="password" type="password" v-bind="password"
                 class="login-form-input"/>
          <span v-if="errors.password" class="text-red-600">{{ errors.password}}</span>
        </div>
        <div>
          <button type="submit" class="login-form-button">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>