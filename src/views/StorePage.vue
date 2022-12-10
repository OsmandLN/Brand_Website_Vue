<template>
  <div class="products-wrapper">
    <ProductCard v-for="product in getProducts" :key="product.id" :initial-product="product" />
  </div>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;

.products-wrapper {
  @include mainContentContainerSetting;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $project-font-TC;
}

@media screen and (min-width:1024px) {
  .products-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  computed: {
    getProducts() {
      return this.$store.state.products
    }
  },
  created() {
    this.$store.dispatch('fetchProductsInfo')
  }
}
</script>
