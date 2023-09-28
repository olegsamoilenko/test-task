<script setup lang="ts">
import { useToast, POSITION  } from "vue-toastification";
const toast = useToast();
toast("I'm a toast!", { position: POSITION.BOTTOM_LEFT });
toast.success("My toast content", {
  timeout: 2000
});
toast("Default toast");
toast.info("Info toast");
toast.success("Success toast");
toast.error("Error toast");
toast.warning("Warning toast");
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <h1 class="mx-auto text-2xl">Головна Сторінка</h1>
    <button @click="toast('I\'m a toast!')">Show Toast</button>
  </div>
</template>

<style scoped>

</style>