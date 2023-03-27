<template>
  <form action="">
    <!-- Step One -->
    <div id="step-one" class="step-one" v-if="currentStep === 1">
      <span>寄送資訊</span>
      <hr>
      <v-form ref="form" v-model="valid">
        <v-select v-model="select" :items="appellations" :rules="[v => (v && v.length < 3) || '稱謂為必填']" label="稱謂"
          required class="v-col-6"></v-select>
        <v-text-field v-model="name" :rules="nameRules" label="姓名" required class="v-col-12"></v-text-field>
        <v-text-field v-model="cellPhoneNumber" :rules="cellPhoneNumberRules" label="手機號碼" required
          class="v-col-12"></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required class="v-col-12"></v-text-field>
        <v-text-field v-model="address" :rules="addressRules" label="地址" required class="v-col-12"></v-text-field>
      </v-form>
    </div>
    <!-- Step Two -->
    <div id="step-two" class="step-two" v-if="currentStep === 2">
      <span>運送方式</span>
      <hr>
      <v-form ref="form" v-model="valid">
        <v-radio-group class="delivery-ways-wrapper" :rules="[v => !!v || '運送方式為必填']" v-model="selected"
          @change="passDeliveryFee">
          <v-radio color="green" label="一般配送" value="0"></v-radio>
          <v-radio color="green" label="黑貓宅急便(200元運費)" value="200"></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <!-- Step Three -->
    <div id="step-three" class="step-three" v-if="currentStep === 3">
      <span>付款資訊</span>
      <hr>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="cardHolder" :rules="cardHolderNameRules" label="持卡人姓名" required
          class="v-col-12"></v-text-field>
        <v-text-field v-model="cardNumber" :rules="cardNumberRules" label="信用卡卡號(XXXX-XXXX-XXXX-XXXX)" required
          class="v-col-12"></v-text-field>
        <v-text-field v-model="expiryDate" :rules="expiryDateRules" label="信用卡有效期限(MM/YY)" required
          class="v-col-12"></v-text-field>
        <v-text-field v-model="securityNumber" :rules="securityNumberRules" label="CVC / CCV" required
          class="v-col-12"></v-text-field>
      </v-form>
    </div>
    <!-- Button Panel -->
    <div class="buttons-panel">
      <button @click.prevent="moveToPreviousStep" class="previous"
        v-if="currentStep === 2 || currentStep === 3">上一步</button>
      <button @click.prevent="moveToNextStep" class="next" v-if="currentStep === 1 || currentStep === 2">下一步</button>
      <button class="confirm" v-if="currentStep === 3">確認下單</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
  position: relative;

  #step-one,
  #step-two,
  #step-three {
    @include checkoutStepsContainerStyle;
  }
}

#step-two {
  .delivery-ways-wrapper {
    margin: 0 0 10px 0
  }
}

// Button Panel
.buttons-panel {
  position: relative;
  top: 650px;
  width: 90%;
  margin: 0 auto;
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

@media screen and (min-width:1024px) {

  .buttons-panel {
    top: 0
  }
}
</style>

<script>

export default {
  data() {
    return {
      valid: true,
      // Step One Inputs
      select: '請選擇',
      appellations: [
        '請選擇',
        '先生',
        '小姐'
      ],
      name: '',
      nameRules: [
        v => !!v || '姓名為必填',
        v => /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/.test(v) || '請輸入有效姓名'
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
        v => !!v || '地址為必填',
        v => /^[0-9\u4e00-\u9fa5\\-]+$/.test(v) || '請輸入有效地址'
      ],
      // Step Two Inputs
      selected: '0',
      // Step Three Inputs
      cardHolder: '',
      cardHolderNameRules: [
        v => !!v || '姓名為必填',
        v => /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/.test(v) || '請輸入有效姓名'
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
      ],
      // Current Step
      currentStep: 1
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
    },
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
    },
    passDeliveryFee() {
      this.$emit('updateDeliveryFee', Number(this.selected))
      console.log('selected', this.selected)
    }
  }
}
</script>
