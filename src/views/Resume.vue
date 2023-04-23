<script setup>
import SideBar from '../components/SideBar.vue'
import Banner from '../components/page-components/Banner.vue'
import PageText from '../components/page-components/PageText.vue'
import PageGo from '../components/page-components/PageGo.vue'
import PageDivider from '../components/page-components/PageDivider.vue'
import SkilBlockContent from '../components/resume/SkilBlockContent.vue'
</script>

<template>
  <div class="page">
    <Banner image="/images/resume.jpg" />
    <div class="mobile-page-info">
      <PageText sub="RESUME" title="My Skills <br> and History" />
      <PageGo currentPage="resume" />
    </div>
    <div class="page-container">
      <div class="page-inner">
        <SideBar />
        <div class="page-left">
          <div class="page-info">
            <PageText sub="RESUME" title="My Skills <br> and History" />
            <PageGo currentPage="resume" />
          </div>
          <div class="skils">
            <div class="skil-block skil-block-language">
              <SkilBlockContent title="English" procent="50%" />
              <SkilBlockContent title="Russian" procent="80%" />
            </div>
            <div class="skil-block skil-block-development">
              <SkilBlockContent title="Html" procent="100%" />
              <SkilBlockContent title="css" procent="100%" />
              <SkilBlockContent title="scss" procent="100%" />
              <SkilBlockContent title="boostrap" procent="100%" />
              <SkilBlockContent title="Tailwind Css" procent="70%" />
            </div>
            <div class="skil-block skil-block-development">
              <SkilBlockContent title="Js" procent="80%" />
              <SkilBlockContent title="jQuery" procent="70%" />
              <SkilBlockContent title="Vue js" procent="100%" />
              <SkilBlockContent title="React js" procent="80%" />
              <SkilBlockContent title="wordpress" procent="80%" />
            </div>
            <div class="knowledge">
              <PageDivider title="knowledge" />
              <div class="knowledge-content">
                <div class="knowledge-content-box">
                  <p class="knowledge-content-box-title">nodejs</p>
                </div>
                <div class="knowledge-content-box">
                  <p class="knowledge-content-box-title">typescript</p>
                </div>
                <div class="knowledge-content-box">
                  <p class="knowledge-content-box-title">graphql</p>
                </div>
                <div class="knowledge-content-box">
                  <p class="knowledge-content-box-title">apollo server</p>
                </div>
                <div class="knowledge-content-box">
                  <p class="knowledge-content-box-title">apollo client</p>
                </div>
                <div class="knowledge-content-box">
                  <p class="knowledge-content-box-title">php</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skils {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 80px;
  row-gap: 40px;
}
.skil-block {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #12492f;
  padding: 40px;
}
.skil-block-language {
  width: 100%;
}
.skil-block-development {
  width: 48%;
}
.knowledge {
  width: 100%;
}
.knowledge-title-block {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
}
.knowledge-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 15px;
  padding: 40px;
  background-color: #12492f;
  position: relative;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 0 10px;
}
.knowledge-content::before {
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
.knowledge-content-box {
  width: 33%;
  position: relative;
  padding-left: 25px;
  color: #dedee0;
}
.knowledge-content-box:after {
  content: '';
  position: absolute;
  top: 6px;
  left: 0;
  height: 10px;
  width: 10px;
  border: solid 3px #f56038;
  border-radius: 50%;
}
.knowledge-content-box-title {
  font-size: 14px;
  font-weight: 400;
  color: #dedee0;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  text-transform: capitalize;
}
@media screen and (max-width: 991px) {
  .skils {
    margin-top: 30px;
    row-gap: 30px;
  }
}
@media screen and (max-width: 767px) {
  .skil-block {
    padding: 20px;
  }
  .skil-block-development {
    width: 100%;
  }
  .knowledge-content {
    padding: 20px;
  }
  .knowledge-content-box {
    width: 48%;
  }
}
</style>
