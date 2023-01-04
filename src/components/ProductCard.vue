<template>
  <div class="product-card">
    <img :src="require('@/assets/images/' + product.image)" alt="product-image">
    <span class="product-name">{{ product.name }}</span>
    <p class="product-description">{{ product.description }}</p>
    <i class="product-price">{{ product.price }} NTD</i>
    <button @click="addToShoppingBag(product)"><i class="fa-solid fa-cart-plus"></i></button>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  width: 90%;
  height: 10%;
  position: relative;
  border: lightgrey 1px solid;
  border-radius: 5px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px 3px lightgray;

  img {
    width: 80%;
    border-radius: 5px;
    margin: 20px 0;
  }

  .product-name {
    font-weight: 700;
  }

  .product-description {
    width: 90%;
    margin: 10px 20px;
    font-size: 14px;
  }

  .product-price {
    margin: 10px 0 20px 0;
    text-decoration: underline;
  }

  button {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    border: lightgray 2px solid;
    border-radius: 50%;
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) {
  .product-card {

    .product-name {
      font-size: 18px;
    }

    .product-description {
      font-size: 16px;
    }

    button {
      width: 45px;
      height: 45px;
      right: 15%;
      font-size: 24px
    }
  }
}

@media screen and (min-width: 1024px) {
  .product-card {
    width: 450px;
    height: 430px;

    button {
      right: 10px;
      bottom: 10px;

      &:hover {
        background-color: lightgreen;
      }
    }
  }
}

@media screen and (min-width: 1200px) {}
</style>

<script>

export default {
  props: {
    initialProduct: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      product: this.initialProduct
    }
  },
  methods: {
    addToShoppingBag(product) {
      this.$store.commit('addItems', product)
      console.log('shoppingItem is', product)
    }
  }
}
</script>
