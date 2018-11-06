<template>
  <div id='Welcome-Page'>
    <h1 id='heading'>{{ heading }}</h1>
    <ImageCard v-for="(image, index) in images" :key="index" :images="images[index]"></ImageCard>
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
      heading: 'Rembrandt Gallery',
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

  #heading {
    font-size: 4rem;
  }
</style>


