<template>
  <div class="messageContainerDesktop" v-if="screenSize=='desktop'">
    <h3 class="messageLabelDesktop">{{carouselMessage}}</h3>
  </div>
  <div class="messageContainerMobile" v-else>
    <h3 class="messageLabelMobile">{{carouselMessage}}</h3>
  </div>
</template>


<style>
  .messageContainerDesktop{
    position: relative;
    background-color: black;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .messageContainerMobile{
    position: relative;
    background-color: black;
    height: 3.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .messageLabelDesktop{
    color: rgb(0, 197, 33); 
  }

  .messageLabelMobile{
    color: rgb(0, 197, 33); 
    font-size: 2vw;
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
