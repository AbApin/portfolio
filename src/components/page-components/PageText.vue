<script setup>
const props = defineProps({
  sub: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="page-text">
    <p class="page-sub">{{ props.sub }}</p>
    <h2 class="page-title" v-html="props.title"></h2>
  </div>
</template>

<style scoped>
.page-text {
  margin-bottom: 30px;
}
.page-sub {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fcfcfe;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  transition: 0.4s ease-in-out;
}
.page-title {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 64px;
  color: #fcfcfe;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  text-transform: capitalize;
}

@media screen and (max-width: 1024px) {
  .page-title {
    font-size: 45px;
  }
}
@media screen and (max-width: 767px) {
  .page-title {
    font-size: 35px;
  }
}
</style>
