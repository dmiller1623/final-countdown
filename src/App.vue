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
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  background-image: url('https://cdn.hipwallpaper.com/i/1/70/7svOqw.jpg');
  background-size: cover;
  flex-direction: column;
}
</style>
