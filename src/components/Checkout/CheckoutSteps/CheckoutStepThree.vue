<template>
  <div id="step-three" class="step-three">
    <span>付款資訊</span>
    <hr>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="cardHolder" :counter="10" :rules="cardHolderNameRules" label="持卡人姓名" required
        class="v-col-12"></v-text-field>
      <v-text-field v-model="cardNumber" :rules="cardNumberRules" label="信用卡卡號" required
        class="v-col-12"></v-text-field>
      <v-text-field v-model="expiryDate" :rules="expiryDateRules" label="信用卡有效期限" required
        class="v-col-12"></v-text-field>
      <v-text-field v-model="securityNumber" :rules="securityNumberRules" label="CVC / CCV" required
        class="v-col-12"></v-text-field>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
#step-three {
  @include checkoutStepsContainerStyle;
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
