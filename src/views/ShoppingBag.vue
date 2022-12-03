<template>
  <ul class="items-wrapper">
    <ShoppingItem />
  </ul>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;

.items-wrapper {
  @include mainContentContainerSetting;
  font-family: $project-font-TC
}
</style>

<script>
import ShoppingItem from '@/components/ShoppingItem.vue'

export default {
  components: {
    ShoppingItem
  }
}
</script>
