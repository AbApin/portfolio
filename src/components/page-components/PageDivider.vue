<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="page-divider">
    <p class="page-divider-title">{{ props.title }}</p>
    <div class="page-divider-box"></div>
  </div>
</template>

<style scoped>
.page-divider {
  display: flex;
  align-items: center;
  gap: 20px;
}
.page-divider-title {
  font-weight: 800;
  color: #dedee0;
}
.page-divider-box {
  font-family: 'Inter', sans-serif;
  height: 1px;
  border-bottom: dotted 2px #f56038;
  flex-grow: 1;
}
</style>
