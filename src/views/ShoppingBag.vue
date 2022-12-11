<template>
  <div class="shopping-bag" id="shopping-bag">
    <div class="form-wrapper">
      <CheckoutForm :initial-current-step="currentStep" />
    </div>
    <div class="buttons-panel">
      <button @click="moveToPreviousStep" class="previous" v-if="currentStep === 2 || currentStep === 3">上一步</button>
      <button @click="moveToNextStep" class="next" v-if="currentStep === 1 || currentStep === 2">下一步</button>
      <button class="confirm" v-if="currentStep === 3">確認下單</button>
    </div>
    <ul class="items-wrapper">
      <ShoppingItem v-for="shoppingItem in getShoppingItems" :key="shoppingItem.id"
        :initial-shopping-item="shoppingItem" />
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
    // display: flex;
    // justify-content: space-around;

    button {
      padding: 5px;
      border-radius: 5px;
      background-color: lightgray;
      box-shadow: 2px 2px 2px black;
    }

    .previous {
      position: relative;
      right: 30%
    }

    .next,
    .confirm {
      position: relative;
      left: 30%
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
  },
  data() {
    return {
      currentStep: 1
    }
  },
  methods: {
    moveToPreviousStep() {
      if (this.currentStep > 1) {
        this.currentStep--
        console.log('to previous and now is', this.currentStep)
      } else {
        // eslint-disable-next-line
        return
      }
    },
    moveToNextStep() {
      if (this.currentStep < 3) {
        this.currentStep++
        console.log('to next and now is', this.currentStep)
      } else {
        // eslint-disable-next-line
        return
      }
    }
  },
  computed: {
    getShoppingItems() {
      return this.$store.state.shoppingItems
    }
  }
}
</script>
