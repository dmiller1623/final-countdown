<template>
  <div id="app">
    <WelcomePage></WelcomePage>
  </div>
</template>

<script>

import WelcomePage from './components/WelcomePage.vue'

export default {
  name: 'app',
  components: {
    WelcomePage
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
