<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="banner">
    <img :src="props.image" alt="banner" />
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 560px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 10px;
  transform: none !important;
}
.banner::after {
  content: '';
  background: rgba(10, 15, 20, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.banner img {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
@media screen and (max-width: 767px) {
  .banner {
    height: 500px;
  }
}
</style>
