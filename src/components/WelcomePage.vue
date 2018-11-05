<template>
  <div class='Welcome-Page'>
    <h1>{{ heading }}</h1>
    <!-- <li v-for='image in images'>{{image}}</li> -->
    <img v-for='(images, index) in images' :src="images" :key="index" />
  </div>
</template>
<script>

import { getGalleries } from '../apiCalls/apiCalls'

export default {
  name: 'WelcomePage',
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

</style>


