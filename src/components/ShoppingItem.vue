<template>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
  </li>
  <li class="shopping-item">
    <img :src="require('@/assets/images/notebookA.png')" alt="product-image">
    <span class="item-name">ABCDEF</span>
    <!-- <span class="item-price">300 NTD</span> -->
    <div class="counter-box">
      <i class="fa-solid fa-circle-minus"></i>
      <span class="count">10</span>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
    <span class="item-amount">3000 NTD</span>
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
export default {}
</script>
