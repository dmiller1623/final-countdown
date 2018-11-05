<template>
  <div class='Welcome-Page'>
    <h1>{{ heading }}</h1>
  </div>
</template>
<script>

import { getGalleries } from '../apiCalls/apiCalls'

export default {
  name: 'WelcomePage',
  data() {
    return {
      heading: 'Final Countdown'
    }
  }, 
  created: function() {
    getGalleries()
  }
}
</script>

<style scoped>

</style>


