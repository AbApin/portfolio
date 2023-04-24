<script setup>
import SideBar from '../components/SideBar.vue'
import Banner from '../components/page-components/Banner.vue'
import PageText from '../components/page-components/PageText.vue'
import PageGo from '../components/page-components/PageGo.vue'
import { onMounted, ref, watch } from 'vue'
import works from '../../public/files/works.json'

const filterLinks = ['all', 'vue js', 'react js', 'html css', 'wordpress']
const activeLink = ref('all')
let worksArray = ref([])
let showCount = ref(6)
onMounted(() => {
  worksArray.value = works.filter((work) => work.category.includes(activeLink.value))
  worksArray.value = shuffleArray(worksArray.value)
})

watch(activeLink, (newValue) => {
  worksArray.value = works.filter((work) => work.category.includes(newValue.split(' ')[0]))
  worksArray.value = shuffleArray(worksArray.value)
  console.log(newValue.split(' ')[0])
})

const filterItemClickHandler = (link) => {
  activeLink.value = link
  showCount.value = 6
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
</script>

<template>
  <div class="page works">
    <Banner image="/images/works.jpg" />
    <div class="mobile-page-info">
      <PageText sub="Works" title="Recent work <br /> performed" />
      <PageGo currentPage="works" />
    </div>
    <div class="page-container">
      <div class="page-inner">
        <SideBar />
        <div class="page-left">
          <div class="page-info">
            <PageText sub="Works" title="Recent work <br /> performed" />
            <PageGo currentPage="works" />
          </div>
          <div class="works-inner">
            <ul class="works-filter">
              <li
                :class="['works-filter-item', { active: link === activeLink }]"
                v-for="link in filterLinks"
                :key="link"
                @click="filterItemClickHandler(link)"
              >
                {{ link }}
              </li>
            </ul>
            <ul class="works-blocks">
              <li
                class="works-block"
                v-for="(work, index) in worksArray"
                :key="work.id"
                v-show="index < showCount"
              >
                <router-link :to="`works/${work.id}`">
                  <div class="works-block-content">
                    <img :src="`/images/works/${work.img}`" alt="work" />
                  </div>
                  <div class="works-block-desc">
                    <p class="works-block-title">{{ work.title }}</p>
                    <div class="works-block-icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
            <button class="show-more" v-if="showCount < worksArray.length" @click="showCount += 6">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.works-inner {
  text-align: center;
}
.works-filter {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #12492f;
  padding: 20px 40px;
  margin-bottom: 40px;
  margin-top: 90px;
}
.works-filter-item {
  display: inline-block;
  font-size: 12px;
  font-weight: 800;
  text-transform: capitalize;
  color: #000;
  box-shadow: inset 0 0 4px -1px rgb(0 0 0/60%);
  background: #dedee0;
  border-radius: 2em;
  padding: 12px 30px;
  transition: 0.4s ease-in-out;
  cursor: pointer;
}
.works-filter-item.active {
  background-color: #f56038;
  color: #fcfcfe;
}
.works-filter-item:hover {
  background-color: #f56038;
  color: #fcfcfe;
}
.works-blocks {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  transition: 0.4s ease-in-out;
}
.works-block {
  width: 48%;
  border-radius: 10px;
  height: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px;
  transition: 0.4s ease-in-out;
}
.works-block-content {
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 10px;
}
.works-block-content img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  transform: scale(1.1);
  transition: 0.4s ease-in-out;
}
.works-block:hover .works-block-content img {
  transform: scale(1);
}
.works-block-desc {
  background-color: #12492f;
  position: absolute;
  width: 100%;
  padding: 20px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: translateY(30px) scale(1.02);
  transition: 0.4s ease-in-out;
}
.works-block:hover .works-block-desc {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.works-block-title {
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.2;
  color: #dedee0;
  text-transform: capitalize;
}
.works-block-icon {
  background-color: #f56038;
  border-radius: 50%;
  color: #fcfcfe;
  width: 40px;
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-more {
  display: inline-block;
  font-weight: 900;
  text-transform: capitalize;
  background-color: #12492f;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  padding: 20px 50px;
  color: #fcfcfe;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 30px;
}
.show-more:hover {
  background-color: #f56038;
}
@media screen and (max-width: 1024px) {
  .works-filter {
    padding: 20px;
  }
  .works-filter-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
@media screen and (max-width: 991px) {
  .works-filter {
    margin-top: 30px;
  }
}
@media screen and (max-width: 767px) {
  .works-filter {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0;
    row-gap: 10px;
  }
  .works-filter-item {
    width: 48%;
  }
  .works-block {
    width: 100%;
  }
}
</style>
