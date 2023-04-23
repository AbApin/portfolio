<script setup>
import SideBar from '../components/SideBar.vue'
import Banner from '../components/page-components/Banner.vue'
import PageText from '../components/page-components/PageText.vue'
import PageGo from '../components/page-components/PageGo.vue'

import works from '../../public/files/works.json'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

let workItem = ref({})
const route = useRoute()

onMounted(() => {
  workItem.value = works.find((work) => work.id === route.params.id)
})
</script>

<template>
  <div class="page">
    <Banner :image="`/images/works/${workItem.img}`" />
    <div class="mobile-page-info">
      <PageText sub="Works item" :title="workItem.title" />
      <PageGo currentPage="work-item" />
    </div>
    <div class="page-container">
      <div class="page-inner">
        <SideBar />
        <div class="page-left">
          <div class="page-info">
            <PageText sub="Works item" :title="workItem.title" />
            <PageGo currentPage="work-item" />
          </div>
          <div class="work-item-info">
            <div class="work-item-info-link">
              <p class="link-sub">Link</p>
              <a :href="workItem.link" target="blank" class="work-item-link">{{ workItem.link }}</a>
            </div>
            <div class="work-item-info-text">
              <p class="work-item-info-sub">Description</p>
              <p class="work-item-info-sub1">{{ workItem.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-item-info {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 160px;
}
.work-item-info-link {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #12492f;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  position: relative;
}
.work-item-info-link::before {
  content: '';
  position: absolute;
  left: 30px;
  top: -8px;
  height: 8px;
  width: calc(100% - 60px);
  background-color: #12492f;
  border-radius: 5px 5px 0 0;
  opacity: 0.3;
}
.link-sub {
  font-weight: 400;
  font-size: 14px;
  color: #f56038;
  line-height: 1.8;
  letter-spacing: 0.05em;
}
.work-item-link {
  font-weight: 400;
  font-size: 14px;
  color: #dedee0;
  line-height: 1.8;
  letter-spacing: 0.05em;
  transition: all 0.3s;
}
.work-item-link:hover {
  text-decoration: underline;
}
.work-item-info-text {
  background-color: #12492f;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
.work-item-info-sub {
  font-weight: 400;
  font-size: 14px;
  color: #f56038;
  line-height: 1.8;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.work-item-info-sub1 {
  font-weight: 400;
  font-size: 14px;
  color: #dedee0;
  line-height: 1.8;
  letter-spacing: 0.05em;
}
@media screen and (max-width: 1024px) {
  .work-item-info {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 185px;
  }
}
@media screen and (max-width: 991px) {
  .work-item-info {
    margin-top: 0;
  }
  .work-item-info-link {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding: 20px;
  }
  .work-item-info-text {
    padding: 20px;
  }
}
@media screen and (max-width: 767px) {
  .work-item-info-link {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding: 20px;
  }
  .work-item-info-text {
    padding: 20px;
  }
  .work-item-info {
    margin-top: 30px;
  }
}
</style>
