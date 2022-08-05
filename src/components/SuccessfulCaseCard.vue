<template>
  <div class="successful-case-card">
    <img :src="require('@/assets/images/' + successfulCase.image)" alt="case-image">
    <span class="successful-case-title">{{ successfulCase.company }}</span>
    <p class="successful-case-description">{{ successfulCase.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.successful-case-card {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: grey, $alpha: 0.1);
  padding: 10px;
  border-radius: 10px;
  margin: 30px 10px;

  img {
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .successful-case-title {
    font-size: 18px;
    font-weight: 700;
  }

  .successful-case-description {
    margin: 10px 0
  }
}

@media screen and (min-width: 768px) {
  .successful-case-card {
    width: 75%;

    img {
      width: 85%;
      margin-top: 10px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .successful-case-card {
    width: 40%;
    height: 350px;
    margin: 30px 15px;

    img {
      width: 90%;

      &:hover {
        transform: scale(1.02);
        transition: 0.5s
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .successful-case-card {
    width: 30%;

    img {
      height: 75%;
    }
  }
}
</style>

<script>
export default {
  props: {
    initialSuccessfulCase: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      successfulCase: this.initialSuccessfulCase
    }
  }
}
</script>
