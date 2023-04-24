<script setup>
import SideBar from '../components/SideBar.vue'
import Banner from '../components/page-components/Banner.vue'
import PageText from '../components/page-components/PageText.vue'
import PageDivider from '../components/page-components/PageDivider.vue'
import HomePriceBlock from '../components/home/HomePriceBlock.vue'
</script>

<template>
  <div class="page">
    <Banner image="/images/home.jpg" />
    <div class="mobile-page-info">
      <PageText sub="HI MY NEW FRIEND!" title="Discover my <br /> development space!" />
    </div>
    <div class="page-container">
      <div class="page-inner">
        <SideBar />
        <div class="page-left">
          <div class="page-info">
            <PageText sub="HI MY NEW FRIEND!" title="Discover my <br /> development space!" />
          </div>
          <div class="home-price">
            <PageDivider title="Price plans" />
            <div class="home-price-blocks">
              <HomePriceBlock title="Hourly Payment" number="10" />
              <HomePriceBlock title="Full Time" number="1000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-price-blocks {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

@media screen and (max-width: 767px) {
  .home-price-blocks {
    flex-direction: column;
    row-gap: 30px;
  }
  .home-price{
    margin-top: 30px;
  }
}
</style>
