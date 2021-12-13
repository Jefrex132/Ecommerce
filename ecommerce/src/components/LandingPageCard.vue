<template>
  <div v-if="screenSize=='desktop'" class="cardContainerDesktop">
    <template v-for="card in cards">
      <v-card :key="card" class="mx-auto my-10 cardDesktop">
        <v-img height="450" :src="require('../assets/images/'+card.imageSource)"></v-img>
        <h1 class="cardTitleDesktop">{{card.title}}</h1>
        <button class="cardButtonDesktop">{{card.buttonTitle}}</button>
      </v-card>
    </template>
  </div>

  <div v-else class="cardContainerMobile">
    <template v-for="card in cards">
      <v-card :key="card" class="mx-auto my-10 cardMobile">
        <v-img height="300" :src="require('../assets/images/'+card.imageSource)"></v-img>
        <h1 class="cardTitleMobile">{{card.title}}</h1>
        <button class="cardButtonMobile">{{card.buttonTitle}}</button>
      </v-card>
    </template>
  </div>
</template>



<style>
  .cardContainerDesktop{
    display: grid;
    grid-template-columns: auto auto auto;
    height: 510px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .cardDesktop{
    height: 450px;
    width: 320px;
  }

  .cardTitleDesktop{
    position: absolute;
    top: 280px;
    left: 30px;
    color: white;
    font-family: carouselTitleFont;
    font-size: 25px;
  }

  .cardButtonDesktop{
    cursor: pointer;
    position: absolute;
    top: 350px;
    left: 30px;
    padding: 15px 55px;
    font-size: 18px;
    color: #ffffff;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0);
  }

  .cardButtonDesktop:hover {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
  }


  /* MOBILE VIEW */
  .cardContainerMobile{
    top: 20px;
    margin: 0 auto;
  } 

  .cardMobile{
    height: 300px;
    width: 80vw;
  }

  .cardTitleMobile{
    position: absolute;
    top: 170px;
    left: 30px;
    color: white;
    font-family: carouselTitleFont;
    font-size: 25px;
  }

  .cardButtonMobile{
    cursor: pointer;
    position: absolute;
    top: 220px;
    left: 30px;
    padding: 10px 30px;
    font-size: 18px;
    color: #ffffff;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0);
  }

  .cardButtonMobile:hover {
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
    data: () => ({
      cards: [
        {title:"E-LIQUIDS",buttonTitle:"EXPLORAR",imageSource: 'placeholder.jpg'},
        {title:"APPAREL",buttonTitle:"DESCUBRIR",imageSource: 'placeholder.jpg'},
        {title:"DEVICES",buttonTitle:"VER",imageSource: 'placeholder.jpg'}
      ]
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