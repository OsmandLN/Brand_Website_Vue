<template>
  <li class="shopping-item">
    <img :src="require('@/assets/images/' + item.image)" alt="shopping-item-image">
    <span class="item-name">{{ item.name }}</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus" @click="onMinusBtnClicked(item)"></i>
      <span class="count">{{ item.units }}</span>
      <i class="fa-solid fa-circle-plus" @click="onPlusBtnClicked(item)"></i>
    </div>
    <span class="item-amount">{{ item.price * item.units }} NTD</span>
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
    },
    onMinusBtnClicked(item) {
      if (this.item.units > 1) {
        this.$store.commit('decreaseItemUnits', item)
      } else {
        // eslint-disable-next-line
        return
      }
    },
    onPlusBtnClicked(item) {
      if (this.item.units < 99) {
        this.$store.commit('increaseItemUnits', item)
      } else {
        // eslint-disable-next-line
        return
      }
    }
  },
  watch: {
    item: {
      handler: function () {
        this.$emit('updateItemUnits', this.item.units)
        console.log('updateItemUnits', this.item, this.item.units)
      },
      deep: true
    }
  }
}
</script>
