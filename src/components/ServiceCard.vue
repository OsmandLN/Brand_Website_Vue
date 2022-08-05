<template>
  <div class="service-card">
    <span class="service-title">{{ service.name }}</span>
    <p class="service-description">{{ service.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.service-card {
  width: 90%;
  background-color: rgba($color: white, $alpha: 0.7);
  padding: 10px;
  border-radius: 10px;
  margin: 30px 10px;

  .service-title {
    font-size: 18px;
    font-weight: 700;
  }

  .service-description {
    width: 90%;
    margin: 10px auto;
  }

  &:nth-child(odd) {
    position: relative;
    right: 10px;
  }

  &:nth-child(even) {
    position: relative;
    left: 10px;
  }
}

@media screen and (min-width: 768px) {
  .service-card {
    width: 60%;

    &:nth-child(odd) {
      position: relative;
      right: 30px;
    }

    &:nth-child(even) {
      position: relative;
      left: 30px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .service-card {
    width: 25%;

    &:nth-child(odd) {
      position: relative;
      right: 0px;
    }

    &:nth-child(even) {
      position: relative;
      left: 0px;
    }

    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
}
</style>

<script>
export default {
  props: {
    initialService: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      service: this.initialService
    }
  }
}
</script>
