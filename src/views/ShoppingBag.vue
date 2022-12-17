<template>
  <div class="shopping-bag" id="shopping-bag">
    <!-- Multiple-Step Form -->
    <div class="form-wrapper">
      <CheckoutForm @updateDeliveryFee="getDeliveryFee" />
    </div>
    <!-- Things to buy -->
    <ul class="items-wrapper">
      <ShoppingItem v-for="shoppingItem in getShoppingItems" :key="shoppingItem.id"
        :initial-shopping-item="shoppingItem" @updateItemUnits="sumUpTotalAmount" />
    </ul>
    <!-- Amount Panel -->
    <div class="amount-panel">
      <div class="delivery-fee-wrapper">
        <span>運費</span>
        <span>{{ deliveryFee }} NTD</span>
      </div>
      <hr>
      <div class="total-amount-wrapper">
        <span>總計</span>
        <span>{{ sumUpTotalAmount }} NTD</span>
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
    border: lightgray 2px dashed;
    border-radius: 5px;
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

  .amount-panel {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    border: lightgray 2px dashed;
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
    grid-template-rows: 500px 200px;

    .form-wrapper {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      grid-column: 1/2;
      grid-row: 1/3;
    }

    .items-wrapper {
      position: relative;
      top: 25px;
      margin: 0 auto;
      grid-column: 2/3;
      grid-row: 1/2;

      &:hover {
        border: black 2px dashed
      }
    }

    .amount-panel {
      position: relative;
      top: 25px;
      grid-column: 2/3;
      grid-row: 2/3;
      margin: 0 auto
    }
  }
}
</style>

<script>
import ShoppingItem from '@/components/ShoppingItem.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'

export default {
  components: {
    ShoppingItem,
    CheckoutForm
  },
  data() {
    return {
      deliveryFee: 0
    }
  },
  methods: {
    getDeliveryFee(fee) {
      this.deliveryFee = fee
      console.log('fee', fee)
      console.log('deliveryFee', this.deliveryFee)
    }
  },
  computed: {
    getShoppingItems() {
      return this.$store.state.shoppingItems
    },
    // getNextStepBtnDisabledStatus() {
    //   return this.$store.state.nextStepBtnDisabled
    // },
    sumUpItemsAmount() {
      // console.log('shoppingItems', this.$store.shoppingItems)
      return this.$store.state.shoppingItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.units
        // console.log('totalAmount', this.totalAmount)
      }, 0)
    },
    sumUpTotalAmount() {
      return this.sumUpItemsAmount + this.deliveryFee
    }
  }
}
</script>
