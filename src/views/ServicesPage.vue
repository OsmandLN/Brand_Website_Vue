<template>
  <div class="services-panel" id="services-panel">
    <span class="what-we-offer-title">我們提供的服務</span>
    <div class="services-wrapper">
      <!-- 用v-for生成重複的service card項目 -->
      <ServiceCard v-for="service in services" :key="service.id" :initial-service="service" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;

.services-panel {
  @include mainContentContainerSetting;
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/images/services-bg.png');
  font-family: $project-font-TC;

  .what-we-offer-title {
    border-bottom: white 3px solid;
    margin: 40px auto 20px auto;
    font-size: 20px;
    color: white;
  }

  .services-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
}

@media screen and (min-width: 1024px) {
  .services-panel {
    .services-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
}
</style>

<script>
import ServiceItems from '../.././public/datas/services.json'
import ServiceCard from '@/components/ServiceCard.vue'

export default {
  components: {
    ServiceCard
  },
  data() {
    return {
      services: ServiceItems.results
    }
  }
}
</script>
