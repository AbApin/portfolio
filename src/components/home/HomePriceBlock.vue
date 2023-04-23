<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="home-price-block">
    <p class="price-block-title">{{ props.title }}</p>
    <div class="price-block-number">
      <sup> <span> $ </span> </sup> <span> {{ props.number }} </span> <sup> <span> h </span> </sup>
    </div>
    <div class="price-block-desc">
      <p class="price-block-desc-sub">AMET LOREM.</p>
      <p class="price-block-desc-sub">DOLOR IPSUM</p>
      <p class="price-block-desc-sub">SIT AMET</p>
      <p class="price-block-desc-sub">LOREM DOLOR</p>
    </div>
    <a href="" class="price-block-btn">ORDER NOW </a>
  </div>
</template>

<style scoped>
.home-price-block {
  width: 48%;
  text-align: center;
  background-color: #12492f;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 0 10px;
}
.price-block-title {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 800;
  color: #dedee0;
}
.price-block-number {
  font-size: 32px;
  font-weight: 900;
  color: #dedee0;
  line-height: 30px;
  margin-top: 30px;
}
.price-block-number sup {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  margin: 0 5px;
  color: #919ca1;
  top: 0.5em;
  position: relative;
}
.price-block-desc {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: dotted 2px rgba(225, 225, 235, 0.15);
}
.price-block-desc-sub {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #dedee0;
}
.price-block-btn {
  white-space: nowrap;
  background-color: #f56038;
  height: 45px;
  border: solid 2px #f56038;
  color: #fcfcfe;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 30px;
  display: inline-flex;
  padding: 0 35px;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
  margin-top: 30px;
}
@media screen and (max-width: 767px) {
  .home-price-block {
    width: 100%;
    padding: 20px;
  }
}
</style>
