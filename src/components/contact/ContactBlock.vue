<script setup>
import ContactBlockText from './ContactBlockText.vue'

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  blockArray: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="contact-block">
    <div class="contact-block-icon">
      <img :src="props.img" alt="phone" />
    </div>
    <p class="contact-block-title">{{ props.title }}</p>
    <div class="contact-block-content">
      <ContactBlockText
        v-for="block in blockArray"
        :key="block.label"
        :label="block.label"
        :link="block.link"
        :href="block.href"
      />
    </div>
  </div>
</template>

<style scoped>
.contact-block {
  flex: 1;
  padding: 40px;
  background-color: #12492f;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
.contact-block-icon img {
  height: 50px;
  width: 50px;
  opacity: 0.4;
  transition: all 0.3s;
}
.contact-block-icon img:hover {
  opacity: 1;
}
.contact-block-title {
  font-weight: 800;
  color: #dedee0;
  margin-top: 20px;
}
.contact-block-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.contact-block-text {
  display: flex;
  align-items: center;
  gap: 10px;
}
.contact-block-label {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #dedee0;
}
.contact-block-link {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #919ca1;
}
@media screen and (max-width: 767px) {
  .contact-block {
    padding: 20px;
  }
}
</style>
