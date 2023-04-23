<script setup>
import TheHeader from './components/header/TheHeader.vue'
</script>

<template>
  <div class="app">
    <div class="app-container">
      <TheHeader />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  background: #00151f;
  padding: 10px;
  min-height: 100vh;
}
.app-container {
  border-radius: 20px;
  background-color: #32443b;
  box-shadow: 0 0 10px #000;
  transition: 0.4s ease-in-out;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
