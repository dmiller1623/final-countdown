<template>
  <div id="ImageInfo" v-if="clicked" v-on:click="toggleCard">
    <div id="info">
      <h1>Century: {{images.century}}</h1>
      <h1>Title: {{images.title}}</h1>
      <h1>Credit Line: {{images.creditLine}}</h1>
    </div>
      <img :src="images.image"/>
  </div>
  <div v-else id='ImageCard'>
    <img :src="images.image" v-on:click="toggleCard"/>
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
  #ImageInfo {
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  img {
    cursor: pointer;
    max-width: 40rem;
    max-height: 40rem;
    margin: 1rem;
  }

  #info {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    max-height: 40rem;
    background-image: url('https://freerangestock.com/sample/47810/old-tainted-parchment--grunge-background.jpg')
  }

  h1 {
    color: #f7f7f7;
  }

</style>


