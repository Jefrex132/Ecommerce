<template>
  <!--- show-arrors="false" is to hide the side arrows
        hide-delimeters is to hide the images amount 
        height="600px" is to set the component height
        interval="6000" is to set the scroll speed to 6 seconds
        cycle is to automatic scrolling 
  --->
  <v-carousel :show-arrows="false"
              hide-delimiters
              height="600px"
              interval="6000"
              cycle>

    <!--- v-for="(carouselImage,i) in carouselImages" is to set n amount of images
          key="i" is to define the key name of the v-for
          src="carouselImage.src" is to define the image source
    --->
    <v-carousel-item
      v-for="(carouselImage,i) in carouselImages"
      :key="i"
      :src="carouselImage.src"
      class="carouselImage"
    ></v-carousel-item>
  </v-carousel>
</template>


<style>

  .carouselImage{
    opacity: 0.9;
  }

</style>



<script>
  export default {
    name: 'LandingPageCarousel',

    data: () => ({
      carouselImages: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ]
    }),

  }
</script>
