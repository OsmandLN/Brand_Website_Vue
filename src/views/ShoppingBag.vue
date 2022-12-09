<template>
  <div class="shopping-bag" id="shopping-bag">
    <div class="form-wrapper">
      <CheckoutForm />
    </div>
    <div class="buttons-panel">
      <button class="previous">上一步</button>
      <button class="next">下一步</button>
    </div>
    <ul class="items-wrapper">
      <ShoppingItem />
    </ul>
    <div class="amount-panel">
      <div class="delivery-fee-wrapper">
        <span>運費</span>
        <span>200 NTD</span>
      </div>
      <hr>
      <div class="total-amount-wrapper">
        <span>總計</span>
        <span>3200 NTD</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;

#shopping-bag {
  @include mainContentContainerSetting;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $project-font-TC;

  .form-wrapper {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  .items-wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: lightgray 1px solid;
    border-radius: 5px;
    // margin: 20px 0
    overflow-y: scroll;
    height: 490px;

    &::-webkit-scrollbar {
      width: 10px;

    }

    &::-webkit-scrollbar-thumb {
      background-color: lightgrey;
      border-radius: 3px;
    }
  }

  .buttons-panel {
    position: absolute;
    bottom: 60px;
    width: 90%;
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px;
      border-radius: 5px;
      background-color: lightgray;
      box-shadow: 2px 2px 2px black;
    }
  }

  .amount-panel {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    border: lightgray 1px solid;
    border-radius: 5px;
    margin: 20px 0;

    .delivery-fee-wrapper,
    .total-amount-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }

    hr {
      width: 90%;
      height: 1px;
      margin: 0 auto;
      color: lightgray;
      background-color: lightgray;
      border-width: 0;
    }
  }
}

@media screen and (min-width:768px) {
  #shopping-bag {
    .amount-panel {
      padding: 0 30px;

      hr {
        width: 100%
      }
    }
  }
}

@media screen and (min-width:1024px) {
  #shopping-bag {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    .form-wrapper {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    .items-wrapper {
      position: relative;
      bottom: 50px;
      margin: 0 auto;
      grid-column: 2/3;
      grid-row: 1/2;
    }

    .buttons-panel {
      position: relative;
      bottom: 0;
      grid-column: 1/2;
      grid-row: 2/3;
      margin: 0 auto
    }

    .amount-panel {
      grid-column: 2/3;
      grid-row: 2/3;
      margin: 0 auto
    }
  }
}
</style>

<script>
import ShoppingItem from '@/components/ShoppingItem.vue'
import CheckoutForm from '@/components/Checkout/CheckoutForm.vue'

export default {
  components: {
    ShoppingItem,
    CheckoutForm
  }
}
</script>
