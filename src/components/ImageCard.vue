<template>
  <div v-if="clicked" v-on:click="toggleCard">
    <h1>suppp</h1>
  </div>
  <div v-else id='ImageCard'>
    <img :src="images" :key="index" v-on:click="toggleCard"/>
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
      this.clicked = !this.clicked
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


