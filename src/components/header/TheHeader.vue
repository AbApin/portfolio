<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const navLinks = [
  { path: '/', title: 'home' },
  { path: '/works', title: 'works' },
  { path: '/contact', title: 'contact' },
  { path: '/resume', title: 'resume' }
]

const downloadPDF = async () => {
  const pdfUrl = '/files/CV.pdf' // Replace with your PDF file URL
  const response = await fetch(pdfUrl)
  const blob = await response.blob()
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'CV.pdf' // Replace with your desired filename
  link.click()
}
const isShowLinks = ref(false)
const isMobile = ref(false)
onMounted(() => {
  window.addEventListener('resize', resizeEventHandler())
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeEventHandler())
})

const resizeEventHandler = () => {
  if (window.innerWidth <= 991) {
    isMobile.value = true
    console.log(isMobile.value)
  }
}
const linkClickHandler = () => {
  if (window.innerWidth <= 991) {
    isShowLinks.value = !isShowLinks.value
  }
}
</script>
<template>
  <header class="header">
    <div class="header-container">
      <div class="header-inner">
        <router-link to="/" class="header-logo"> Portfolio </router-link>
        <div class="burger-btn" @click="isShowLinks = !isShowLinks">
          <i class="fa-solid fa-bars fa-xl" v-if="!isShowLinks"></i>
          <i class="fa-solid fa-xmark fa-xl" v-else></i>
        </div>
        <div :class="['header-content', { active: isShowLinks && isMobile }]">
          <nav class="nav">
            <ul class="nav-links">
              <router-link
                v-for="link in navLinks"
                :key="link"
                :to="link.path"
                class="nav-link-item"
                @click="linkClickHandler"
                >{{ link.title }}</router-link
              >
            </ul>
          </nav>
          <button class="download-btn" @click="downloadPDF">
            download cv
            <i class="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  z-index: 9;
  background-color: #12492f;
  width: calc(100% - 20px);
  margin: 0 auto;
  height: 80px;
}
.header-container {
  max-width: 1140px;
  margin: 0 auto;
  height: 100%;
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 20%;
  justify-content: space-between;
  height: 100%;
}
.header-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-logo {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 22px;
  color: #dedee0;
  letter-spacing: 0;
}
.download-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 15px 35px;
  background: transparent;
  border: 0;
  white-space: nowrap;
  background-color: #f56038;
  color: #fcfcfe;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.nav-link-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 700;
  height: 80px;
  white-space: nowrap;
  padding: 0 20px;
  line-height: 80px;
  color: #dedee0;
  position: relative;
  transition: 0.4s ease-in-out;
}
.nav-link-item:after {
  content: '';
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  height: 4px;
  width: 0;
  background-color: #f56038;
  transition: 0.4s ease-in-out;
}
.router-link-active::after {
  width: 100%;
}
.nav-link-item:hover {
  color: #f56038;
}
.burger-btn {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25px;
  height: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.burger-btn i {
  color: #dedee0;
}

@media screen and (max-width: 1024px) {
  .header {
    padding: 0 20px;
  }
}
@media screen and (max-width: 991px) {
  .burger-btn {
    display: flex;
  }
  .header {
    padding: 0 20px;
  }
  .header-content {
    position: absolute;
    right: -300px;
    top: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #12492f;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 100px 20px 40px 20px;
    -webkit-animation: scale-in-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .header-content.active {
    right: 0;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  .nav-link-item {
    height: 0;
    padding-bottom: 30px;
    line-height: 1;
  }
  .download-btn {
    margin-top: 30px;
  }
}
</style>
