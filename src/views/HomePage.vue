<template>
  <div class="main-container">
    <div class="sub-container"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/mainContentContainerSetting.scss';

.main-container {
  @include mainContentContainerSetting;
  height: auto;

  .sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
}

@media screen and (min-width: 768px) {
  .main-container {
    .sub-container {
      min-width: 600px;

    }
  }
}
</style>

<script>
// import axios from 'axios'

export default {
  components: {},
  data: function () {
    return {}
  },
  methods: {},
  mounted: function () { }
}
</script>
