<template>
  <CheckoutStepOne />
  <CheckoutStepTwo />
  <CheckoutStepThree />
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
  }
}
</script>
