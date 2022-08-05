<template>
  <div class="cases-panel" id="cases-panel">
    <span class="successful-cases-title">成功案例</span>
    <div class="cases-wrapper">
      <!-- 用v-for生成重複的service card項目 -->
      <SuccessfulCaseCard v-for="successfulCase in successfulCases" :key="successfulCase.id"
        :initial-successful-case="successfulCase" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;

.cases-panel {
  @include mainContentContainerSetting;
  display: flex;
  flex-direction: column;
  font-family: $project-font-TC;

  .successful-cases-title {
    border-bottom: black 3px solid;
    margin: 40px auto 20px auto;
    font-size: 20px;
  }

  .cases-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .cases-panel {

    .cases-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>

<script>
import CaseItems from '@/assets/datas/successful-cases.json'
import SuccessfulCaseCard from '@/components/SuccessfulCaseCard.vue'

export default {
  components: {
    SuccessfulCaseCard
  },
  data() {
    return {
      successfulCases: CaseItems.results
    }
  }
}
</script>
