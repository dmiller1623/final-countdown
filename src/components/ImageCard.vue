<template>
  <div v-if="clicked" id='ImageCard'>
    <img v-for='(images, index) in images' :src="images" :key="index" v-on:click="toggleCard"/>
  </div>
  <div v-else>
    <h1>suppp</h1>
  </div>
</template>

<script>

export default {
  name: 'ImageCard',
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    toggleCard: function() {
      console.log('hey')
    }
  }
}
</script>

<style scoped>
  /* #ImageCard {
    max-width: 30rem;
    max-height: 30rem;
  } */
  img {
    max-width: 40rem;
    max-height: 40rem;
    margin: 1rem;
  }
</style>


