<script setup>
const props = defineProps({
  currentPage: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="page-go">
    <router-link to="/" class="go-home-link">home</router-link>/
    <p class="current-page">{{ props.currentPage }}</p>
  </div>
</template>

<style scoped>
.page-go {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  height: 45px;
  border-radius: 30px;
  border: solid 2px #fcfcfe !important;
  background-color: transparent !important;
  text-shadow: none !important;
  box-shadow: 0 0 10px #000;
  color: #fcfcfe;
}
.go-home-link {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fcfcfe;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  padding-right: 5px;
  transition: all 0.3s;
}
.go-home-link:hover{
    color: #f56038;
}
.current-page {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  padding-left: 5px;
  color: #fcfcfe;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
}
</style>
