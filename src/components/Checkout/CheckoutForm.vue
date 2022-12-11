<template>
  <CheckoutStepOne v-if="nowStep === 1" />
  <CheckoutStepTwo v-if="nowStep === 2" />
  <CheckoutStepThree v-if="nowStep === 3" />
  <!-- <span>{{ nowStep }}</span> -->
</template>

<style lang="scss" scoped>

</style>

<script>
import CheckoutStepOne from './CheckoutSteps/CheckoutStepOne.vue'
import CheckoutStepTwo from './CheckoutSteps/CheckoutStepTwo.vue'
import CheckoutStepThree from './CheckoutSteps/CheckoutStepThree.vue'

export default {
  components: {
    CheckoutStepOne,
    CheckoutStepTwo,
    CheckoutStepThree
  },
  props: {
    initialCurrentStep: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      nowStep: this.initialCurrentStep // 不寫watch的情況下，為什麼nowStep吃不到initialCurrentStep的變化?
    }
  },
  watch: {
    initialCurrentStep: {
      handler: function () {
        this.nowStep = this.initialCurrentStep
      }
    }
  }
}
</script>
