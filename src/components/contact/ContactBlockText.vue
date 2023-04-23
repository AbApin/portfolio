<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="contact-block-text">
    <p class="contact-block-label">{{ props.label }}</p>
    <a :href="props.href" class="contact-block-link">{{ props.link }}</a>
  </div>
</template>

<style scoped>
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
</style>
