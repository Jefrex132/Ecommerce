<template>
  <div style="position: relative;" v-if="screenSize=='desktop'">
    <div class="carouselContainer">
      <!--- show-arrors="false" is to hide the side arrows
          hide-delimeters is to hide the images amount 
          height="600px" is to set the component height
          interval="6000" is to set the scroll speed to 6 seconds
          cycle is to automatic scrolling 
      --->
      <v-carousel :show-arrows="false" hide-delimiters height="650px" interval="6000" cycle>
        <!--- v-for="(carouselImage,i) in carouselImages" is to set n amount of images
              key="i" is to define the key name of the v-for
              src="carouselImage.src" is to define the image source
        --->
        <v-carousel-item v-for="(carouselImage,i) in carouselImages" :key="i" :src="carouselImage.src" class="carouselImage">
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="carouselInfoContainerDesktop">
      <h1 class="carouselTitleDesktop">{{carouselTitle}}</h1>
      <br>
      <p class="carouselSubtitleDesktop">{{carouselSubtitle}}</p>
      <button class="carouselButtonDesktop carouselButtonActiveDesktop">{{carouselButtonTitle[0]}}</button>
      <button class="carouselButtonDesktop carouselButtonInactiveDesktop">{{carouselButtonTitle[1]}}</button>
    </div>
  </div>

  <div style="position: relative;" v-else>
    <div class="carouselContainer">
      <v-carousel :show-arrows="false" hide-delimiters height="550px" interval="6000" cycle>
        <v-carousel-item v-for="(carouselImage,i) in carouselImages" :key="i" :src="carouselImage.src" class="carouselImage">
        </v-carousel-item>
        <div class="carouselInfoContainerMobile">
          <h1 class="carouselTitleMobile">{{carouselTitle}}</h1>
          <br>
          <p class="carouselSubtitleMobile">{{carouselSubtitle}}</p>
          <div style="text-align: center;">
            <button class="carouselButtonMobile carouselButtonActiveMobile">{{carouselButtonTitle[0]}}</button>
            <button class="carouselButtonMobile carouselButtonInactiveMobile">{{carouselButtonTitle[1]}}</button>
          </div>
        </div>
      </v-carousel>      

    </div>


  </div>
</template>


<style>

  .carouselContainer{
    position: relative;
    z-index: 0;
  }

  .carouselImage{
    opacity: 0.9;
  }


  /* DESKTOP VIEW */
  .carouselInfoContainerDesktop {
    position: absolute;
    top: 200px;
    left: 100px;
  }

  .carouselTitleDesktop{
    font-family: carouselTitleFont;
    max-width: 600px;
    font-size: 50px;
    color: rgb(252,137,2);
  }

  .carouselSubtitleDesktop{
    max-width: 630px;
    text-align: justify;
    font-size: 20px;
    color: rgb(255, 255, 255);
  }
  
  .carouselButtonDesktop{
    cursor: pointer;
    position: relative;
    top: 60px;
    padding: 15px 55px;
    font-size: 18px;
  }

  .carouselButtonActiveDesktop{
    color: black;
    border: 1px solid rgb(255, 255, 255);
    background-color: white;
  }

  .carouselButtonInactiveDesktop{
    left: 60px;
    color: #ffffff;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0);
  }

  .carouselButtonActiveDesktop:hover {
    background-color: #00000000;
    color: white;
  }

  .carouselButtonInactiveDesktop:hover {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
  }


  /* MOBILE VIEW */
  .carouselInfoContainerMobile{
    position: absolute;
    z-index: 1;
    top: 190px;
    align-self: center;
  }

  .carouselTitleMobile{
    font-family: carouselTitleFont;
    max-width: 90vw;
    font-size: 5vw;
    color: rgb(252,137,2); 
    text-align: center;
  }

  .carouselSubtitleMobile{
    max-width: 80vw;
    text-align: center;
    font-size: medium;
    color: rgb(255, 255, 255);
  }

  .carouselButtonMobile{
    cursor: pointer;
    position: relative;
    top: 60px;
    font-size: 18px;
    padding: 3vw 6vw;
    align-self: center;
  }

  .carouselButtonActiveMobile{
    color: black;
    border: 1px solid rgb(255, 255, 255);
    background-color: white;
  }

  .carouselButtonInactiveMobile{
    color: #ffffff;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0);
  }

  .carouselButtonActiveMobile:hover {
    background-color: #00000000;
    color: white;
  }

  .carouselButtonInactiveMobile:hover {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
  }


  @font-face{ 
    font-family: carouselTitleFont; 
    src: url('../assets/fonts/ethnocentric.ttf'); 
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
        ],
      
      carouselTitle: "YOUR ONE-STOP SHOP",
      carouselSubtitle: "La mejor y más asequible tienda de vapeo en Costa Rica. Donde puedes encontrar todo, desde los más deliciosos e-liquids hasta kits de inicio y accesorios de vapeo.",
      carouselButtonTitle: ["COMPRAR","SUSCRIBETE"]
    
    }),

    computed:{
      screenSize(){
        if(this.$vuetify.breakpoint.name == 'xs'){
          return 'phone'
        }
        if(this.$vuetify.breakpoint.name == 'sm'){
          return 'phone'
        }else{
          return 'desktop'
        }
        
      }
    }

  }
</script>
