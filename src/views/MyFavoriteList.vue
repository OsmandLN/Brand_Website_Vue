<template>
  <div class="favorite-main-container">
    <div class="favorite-sub-container">
      <CardAndModal />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/mainContentContainerSetting.scss';

.favorite-main-container {
  @include mainContentContainerSetting;
}
</style>

<script>
import CardAndModal from '../components/CardAndModal.vue'

export default {
  components: {
    CardAndModal
  }
}
</script>
