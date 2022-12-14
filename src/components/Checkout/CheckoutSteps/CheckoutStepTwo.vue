<template>
  <div id="step-two" class="step-two">
    <span>運送方式</span>
    <hr>
    <v-form ref="form" v-model="valid">
      <v-radio-group class="delivery-ways-wrapper" v-model="selected" :rules="[v => !!v || '運送方式為必填']">
        <v-radio color="green" label="一般配送" value="0"></v-radio>
        <v-radio color="green" label="黑貓宅急便(200元運費)" value="200"></v-radio>
      </v-radio-group>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
#step-two {
  @include checkoutStepsContainerStyle;

  .delivery-ways-wrapper {
    margin: 0 0 10px 0
  }
}
</style>

<script>
export default {
  data() {
    return {
      valid: true,
      selected: '0'
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
