<template>
  <div class="messageContainerDesktop" v-if="screenSize=='desktop'">
    <h3 class="messageCarouselLabelDesktop">{{carouselMessage}}</h3>
  </div>
  <div class="messageContainerMobile" v-else>
    <h3 class="messageCarouselLabelMobile">{{carouselMessage}}</h3>
  </div>
</template>


<style>
  .messageContainerDesktop{
    position: relative;
    background-color: black;
    text-align: center;
  }

  .messageContainerMobile{
    position: relative;
    background-color: black;
    text-align: center;
  }

  .messageCarouselLabelDesktop{
    color: rgb(255, 255, 255);
    align-self: center;
    position: relative;
  }

  .messageCarouselLabelMobile{
    color: rgb(255, 255, 255); 
    font-size: small;
    align-self: center;
  }
  
</style>



<script>
  export default {
    name: 'LandingPageCarouselMessage',
    
    data: () => ({
      carouselMessage: "Envío GRATIS a todo el país en compras mayores a 10,000 colones"
    }),

    methods: {
    },

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
