<template>
  <div id="step-one" class="step-one">
    <span>寄送資訊</span>
    <hr>
    <v-form ref="form" v-model="valid">
      <v-select v-model="select" :items="appellations" :rules="[v => (v && v.length < 3) || '稱謂為必填']" label="稱謂"
        required class="v-col-6"></v-select>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="姓名" required class="v-col-12"></v-text-field>
      <v-text-field v-model="cellPhoneNumber" :rules="cellPhoneNumberRules" label="手機號碼" required
        class="v-col-12"></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required class="v-col-12"></v-text-field>
      <v-text-field v-model="address" :rules="addressRules" label="地址" required class="v-col-12"></v-text-field>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
#step-one {
  @include checkoutStepsContainerStyle;
}
</style>

<script>
export default {
  data() {
    return {
      valid: true,
      select: '請選擇',
      appellations: [
        '請選擇',
        '先生',
        '小姐'
      ],
      name: '',
      nameRules: [
        v => !!v || '姓名為必填',
        v => (v && v.length <= 10) || '姓名需小於10個字'
      ],
      cellPhoneNumber: '',
      cellPhoneNumberRules: [
        v => !!v || '手機號碼為必填',
        v => /^09[0-9]{8}$/.test(v) || '請填入有效的手機號碼'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail為必填',
        v => /.+@.+\..+/.test(v) || '請填入有效的E-mail'
      ],
      address: '',
      addressRules: [
        v => !!v || '地址為必填'
      ]
    }
  },
  methods: {
    validate() {
      const { valid } = this.$refs.form.validate()
      if (!valid) {
        this.$store.commit('isNextStepBtnDisabled', true)
        alert('請將資料填寫齊全')
      } else {
        this.$store.commit('isNextStepBtnDisabled', false)
      }
    }
  }
}
</script>
