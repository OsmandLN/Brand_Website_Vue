<template>
  <TheNavbar />
  <!-- router-view為抽換樣板的進入口 -->
  <router-view></router-view>
  <TheFooter />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import TheNavbar from '../src/components/TheNavbar.vue'
import TheFooter from '../src/components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>
