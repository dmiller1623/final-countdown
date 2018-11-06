<template>
  <div id='Welcome-Page'>
    <h1>{{ heading }}</h1>
    <ImageCard :images="images[0]"></ImageCard>
    <ImageCard :images="images[1]"></ImageCard>
    <ImageCard :images="images[2]"></ImageCard>
    <ImageCard :images="images[3]"></ImageCard>
    <ImageCard :images="images[4]"></ImageCard>
    <ImageCard :images="images[5]"></ImageCard>
    <ImageCard :images="images[6]"></ImageCard>
    <ImageCard :images="images[7]"></ImageCard>
    <ImageCard :images="images[8]"></ImageCard>
    <ImageCard :images="images[9]"></ImageCard>
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
    align-items: center;
    height: 100vh;
    overflow: scroll;
    width:  100%;
  }
</style>


