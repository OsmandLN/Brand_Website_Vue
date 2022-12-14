<template>
  <div id="step-three" class="step-three">
    <span>付款資訊</span>
    <hr>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="cardHolder" :counter="10" :rules="cardHolderNameRules" label="持卡人姓名" required
        class="v-col-12"></v-text-field>
      <v-text-field v-model="cardNumber" :rules="cardNumberRules" label="信用卡卡號(XXXX-XXXX-XXXX-XXXX)" required
        class="v-col-12"></v-text-field>
      <v-text-field v-model="expiryDate" :rules="expiryDateRules" label="信用卡有效期限(MM/YY)" required
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
      valid: true,
      cardHolder: '',
      cardHolderNameRules: [
        v => !!v || '姓名為必填',
        v => (v && v.length <= 10) || '姓名需小於10個字'
      ],
      cardNumber: '',
      cardNumberRules: [
        v => !!v || '信用卡卡號為必填',
        v => /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(v) || '請填入有效的信用卡卡號'
      ],
      expiryDate: '',
      expiryDateRules: [
        v => !!v || '到期時間為必填',
        v => /^((0[1-9])|(1[0-2]))\/(\d{2})$/.test(v) || '請輸入有效的到期時間'
      ],
      securityNumber: '',
      securityNumberRules: [
        v => !!v || '安全碼為必填',
        v => /^\d{3}$/.test(v) || '請輸入有效的安全碼'
      ]
    }
  }
}
</script>
