<template>
  <li class="shopping-item">
    <img src="" alt="product-image">
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
  display: flex;
  flex-direction: column;
}
</style>
