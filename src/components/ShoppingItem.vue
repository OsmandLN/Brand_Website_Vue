<template>
  <li class="shopping-item">
    <img :src="require('@/assets/images/' + item.image)" alt="shopping-item-image">
    <span class="item-name">{{ item.name }}</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">{{ item.price }} NTD</span>
    <button @click.prevent="removeFromShoppingBag(item)"><i class="fa-solid fa-square-xmark"></i></button>
  </li>
</template>

<style lang="scss" scoped>
.shopping-item {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 0;

  // flex-direction: column;
  img {
    width: 60px;
    height: 60px;
    border-radius: 3px;
  }

  .counter-box {
    display: flex;
    // justify-content: space-between;
    align-items: center;

    .count {
      margin: 0 3px
    }
  }
}
</style>

<script>
export default {
  props: {
    initialShoppingItem: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      item: this.initialShoppingItem
    }
  },
  methods: {
    removeFromShoppingBag(item) {
      this.$store.commit('removeItems', item)
      console.log('removeItem is', item)
    }
  }
}
</script>
