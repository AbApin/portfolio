<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  procent: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="skil-block-content">
    <div class="skil-block-top">
      <p class="skil-block-title">{{ props.title }}</p>
      <p class="skil-block-procent">{{ props.procent }}</p>
    </div>
    <div class="skil-block-bottom">
      <div class="skil-block-bottom-inner" :style="{ width: props.procent }"></div>
    </div>
  </div>
</template>

<style scoped>
.skil-block-content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.skil-block-top {
  display: flex;
  justify-content: space-between;
}
.skil-block-title {
  font-size: 14px;
  font-weight: 800;
  color: #dedee0;
  line-height: 1.2;
  text-transform: capitalize;
}
.skil-block-procent {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #919ca1;
}
.skil-block-bottom {
  background-color: #dedee0;
  height: 5px;
  width: 100%;
  box-shadow: inset 0 0 4px -1px;
  position: relative;
  border-radius: 10px;
}
.skil-block-bottom-inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #f56038;
  transition: 0.8s ease-in-out;
  transition-delay: 0.4s;
  border-radius: 10px;
  z-index: 1;
}
</style>
