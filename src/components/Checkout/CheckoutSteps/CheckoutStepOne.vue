<template>
  <div id="step-one" class="step-one">
    <span>寄送資訊</span>
    <hr>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-select v-model="select" :items="appellations" :rules="[v => !!v || '稱謂為必填']" label="稱謂" required
        class="v-col-6"></v-select>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="姓名" required
        class="v-col-12"></v-text-field>
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
      name: '',
      nameRules: [
        v => !!v || '姓名為必填',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      select: null,
      appellations: [
        '先生',
        '小姐'
      ],
      cellPhoneNumber: '',
      cellPhoneNumberRules: [],
      email: '',
      emailRules: [
        v => !!v || 'E-mail為必填',
        v => /.+@.+\..+/.test(v) || '請填入有效的E-mail'
      ],
      address: '',
      addressRules: []
    }
  },
  methods: {
  }
}
</script>
