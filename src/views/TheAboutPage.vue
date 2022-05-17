<template>
  <div class="about-description">
    <p>
      一位在臺南土生土長的前端開發者，在家鄉生活了二十幾年，對於在地的景點卻沒那麼熟悉，希望藉由此專案讓自己及其他人更加了解臺南這個地方。
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/mainContentContainerSetting.scss';
$project-font-TC: 'Noto Sans TC', sans-serif;

.about-description {
  @include mainContentContainerSetting;

  p {
    width: 85%;
    position: absolute;
    top: 3rem;
    font-family: $project-font-TC;
  }
}
</style>
