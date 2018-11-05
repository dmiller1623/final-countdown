<template>
  <div id='Welcome-Page'>
    <h1>{{ heading }}</h1>
    <ImageCard :images="images"></ImageCard>
    <!-- <img v-for='(images, index) in images' :src="images" :key="index" /> -->
  </div>
</template>

<script>

import { getGalleries } from '../apiCalls/apiCalls'
import ImageCard from './ImageCard'

export default {
  name: 'WelcomePage',
  components: {
    ImageCard
  },
  data() {
    return {
      heading: 'Final Countdown',
      images: []
    }
  },
  methods: {
    setImages: async function() {
      let allImages = await getGalleries();
      this.images = allImages;
    }
  }, 
  created: function() {
    this.setImages();
  }
}
</script>

<style scoped>
  #Welcome-Page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
    width:  100%;
    background-color: aqua;
  }
</style>


