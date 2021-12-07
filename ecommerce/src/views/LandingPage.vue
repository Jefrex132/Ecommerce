<template>
  <div>
    <LandingPageCarousel/>
    <Navbar/>
    
  </div>
</template>

<script>
  import LandingPageCarousel from '../components/LandingPageCarousel.vue'
  import Navbar from '../components/LandingPageNavbar.vue'

  export default {
    name: 'LandingPage',

    components: {
      LandingPageCarousel,
      Navbar
    },
  }
</script>
