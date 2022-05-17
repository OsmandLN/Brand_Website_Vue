<template>
  <div class="main-container">
    <div class="sub-container">
      <CardAndModal />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/mainContentContainerSetting.scss';

.main-container {
  @include mainContentContainerSetting;
}
</style>

<script>
// import axios from 'axios'
import CardAndModal from '../components/CardAndModal.vue'

export default {
  components: {
    CardAndModal
  }
  // data: function () {
  //   return {
  //     allData: []
  //   }
  // },
  // mounted: function () {
  //   axios
  //     .get('/tainan_tourist_attractions.json')
  //     .then((response) => {
  //       console.log(response.data)
  //       this.allData = response.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
}
</script>
