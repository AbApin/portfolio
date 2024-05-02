<script setup>
import SideBar from '../components/SideBar.vue'
import Banner from '../components/page-components/Banner.vue'
import PageText from '../components/page-components/PageText.vue'
import PageGo from '../components/page-components/PageGo.vue'
import ContactBlock from '../components/contact/ContactBlock.vue'
const callArray = [{ label: 'PERSONAL:', href: 'tel:+37499949873', link: '+37499949873' }]
const writeArray = [
  { label: 'EMAIL:', href: 'mailto:apinyan2005@mail.ru', link: 'apinyan2005@mail.ru' },
  { label: 'GMAIL:', href: 'mailto:apinyan2005@gmail.com', link: 'apinyan2005@gmail.com' }
]
</script>

<template>
  <div class="page">
    <Banner image="/images/contact.jpg" />
    <div class="mobile-page-info">
      <PageText sub="CONTACT" title="Have a question? <br> Let's Get in Touch" />
      <PageGo currentPage="contact" />
    </div>
    <div class="page-container">
      <div class="page-inner">
        <SideBar />
        <div class="page-left">
          <div class="page-info">
            <PageText sub="CONTACT" title="Have a question? <br> Let's Get in Touch" />
            <PageGo currentPage="contact" />
          </div>
          <div class="contact-blocks">
            <ContactBlock title="Call" img="/images/phone.svg" :blockArray="callArray" />
            <ContactBlock title="Write" img="/images/email.svg" :blockArray="writeArray" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-blocks {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 50px;
}
@media screen and (max-width: 991px) {
  .contact-blocks {
    margin-top: 20px;
  }
}
@media screen and (max-width: 767px) {
  .contact-blocks {
    flex-direction: column;
  }
}
</style>
