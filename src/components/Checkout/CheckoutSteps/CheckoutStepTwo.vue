<template>
  <div id="step-two" class="step-two">
    <span>運送方式</span>
    <hr>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-radio-group class="delivery-ways-wrapper" hide-details>
        <v-radio color="green" label="一般配送" value="1"></v-radio>
        <v-radio color="green" label="黑貓宅急便(200元運費)" value="2"></v-radio>
      </v-radio-group>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
#step-two {
  @include checkoutStepsContainerStyle;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .delivery-ways-wrapper {
    margin: 0 0 10px 0
  }
}
</style>

<script>
export default {
  data() {
    return {
      valid: true
    }
  }
}
</script>
