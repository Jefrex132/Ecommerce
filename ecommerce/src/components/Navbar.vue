<template>

  <div v-if="screenSize == 'desktop'">
    <div class="navbarContainer">
      <div class="navbar">
        <div style="display: grid; grid-template-columns: auto auto;">
          <div style="text-align: left;">
            <v-img src="@/assets/images/kingvapelogo.png" height="70px" width="150px" @click="goToLandingPage" class="navbarImage"></v-img>
          </div>
          <div style="text-align: right;">
            <!--
            <template v-for="option in options">
              <v-hover :key="option" close-delay="200" open-delay="200">
                <v-btn v-if="option.options" flat style="position: relative; top: 40px; margin-right: 20px;" :ripple="false" slot-scope="{ hover }">
                  {{option.title}}
                  <NestedMenu :options="option.options" v-if="hover"></NestedMenu>
                </v-btn>
                <v-btn v-else flat style="position: relative; top: 40px; margin-right: 20px;">{{option.title}}</v-btn> 
              </v-hover>
            </template>
            -->
            <v-icon color="blue" size="30" class="cartIconNavbarDesktop" @click.stop="searchDrawer = true">mdi-magnify</v-icon>
            <v-icon color="blue" size="30" class="cartIconNavbarDesktop" style="margin-left: 0px; margin-right: 30px;" @click="goToShoppingCart">mdi-cart</v-icon>
          </div>
        </div>
      </div>
      <v-snackbar color="black" width="80vw" app v-model="searchDrawer" :timeout="2000" style="margin-bottom: 10px;" >
        <div style="margin: 0 auto;">
          <v-text-field hide-details outlined dense dark width="80%" single-line style="margin-top: 10px;"></v-text-field>
          <div style="margin: 0 auto; display: flex; justify-content: center;">
            <v-btn depressed color="primary" style="margin-top: 20px;">Buscar</v-btn>
          </div>
        </div>
      </v-snackbar>

    </div>

    
  </div>


  <div v-else>
    <div class="navbarContainer">
      <div class="navbar" style="height: 80px; background-color: white;">
        <div style="width: 50vw; margin: 0 auto; display: grid; grid-template-columns: auto auto auto; position: relative; top: 50%; transform: translateY(-50%);">
          <v-icon color="black" style="margin-left: -20px;" size="20" @click.stop="searchDrawer = true">mdi-magnify</v-icon>
          <div>
            <v-img src="@/assets/images/kingvapelogoblack.webp" style="display: block; margin-left: auto; margin-right: auto; position: relative; top: 50%; transform: translateY(-50%);" contain :aspect-ratio="16/9" :width="100" @click="goToLandingPage"></v-img>
          </div>
          <v-icon color="black" style="margin-right: -20px;" size="20" @click.stop="mainDrawer = true">mdi-menu</v-icon> 
        </div>
      </div>
    </div>
    
    <v-navigation-drawer v-model="searchDrawer" height="130px" bottom app style="background-color: black;">
      <div style="width: 80vw; position:relative; margin: 0 auto;">
        <v-text-field hide-details outlined dense dark width="80%" single-line style="margin-top: 20px;"></v-text-field>
      </div>
      <div style="width: 80vw; position: relative; margin: 0 auto; display: flex; justify-content: center;">
        <v-btn depressed color="primary" style="margin-top: 20px;">Buscar</v-btn>
      </div>
    </v-navigation-drawer>


    <v-navigation-drawer v-model="mainDrawer" width="80%" right app>    
      <div style="position: relative; width: 100%; text-align:right; border-bottom: 1px solid rgb(224, 224, 224);">
        <v-icon color="black" style="margin: 20px;" size="25" @click.stop="mainDrawer = false">mdi-close</v-icon>
      </div>    
      <template v-for="option in options">
        <div :key="option" v-if="option.options">
          <v-expansion-panels flat accordion>
            <v-expansion-panel style="background-color: rgb(244, 244, 244);">
              <v-expansion-panel-header>{{option.title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <NestedMenu :options="option.options"></NestedMenu>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div :key="option" v-else>
          <v-expansion-panels flat accordion>
            <div style="position: relative; width: 100%; background-color: rgb(244, 244, 244);">
              <p style="position: relative; margin-left: 25px; margin-top: 11px; margin-bottom: 11px;">{{option.title}}</p>
            </div>
          </v-expansion-panels>
        </div>
      </template>


      <div style="position: relative; width: 100%; text-align:left; border-top: 1px solid rgb(224, 224, 224);">
        <v-icon color="blue" style="margin: 30px;" size="25" @click="goToShoppingCart">mdi-cart</v-icon>
      </div>
    </v-navigation-drawer>
  </div>


</template>


<style>

  .navbarContainer{
    position: relative;
    height: 0px;
    z-index: 1; 
  }

  .cartIconNavbarDesktop{
    cursor: pointer;
    margin-left: 18px;
    margin-right: 18px;
    top: 43px;
    position: relative;
  }

  .navbar{
    height: 110px;
    background-color: rgba(110, 110, 110, 0.384);
  }

  .navbarImage{ 
    margin: 20px;
    left: 70px;
    cursor: pointer;
  }

  .optionContainer{
    position: relative;
    top: 30px;
    margin: 10px;
  }

  .optionLabelNavbarDesktop{
    top: 45px; 
    position:relative;
    margin: 18px; 
    cursor:pointer;
  }

</style>



<script>
  import router from '../router/index';
  import NestedMenu from '../components/NestedMenu.vue'

  export default {
    name: 'Navbar',

    components: {
      NestedMenu
    },

    data: () => ({ 
      options: [
        {title: 'e-Liquids', options:[
          {title:'Importados', options: [
            {title: 'AIR FACTORY', options: [
              {title: 'Articulo de prueba'}
            ]},
            {title: 'BLVK Unicorn'}
          ]},
          {title:'Nacionales'}
        ]},

        {title: 'Nic Salts'},

        {title: 'Desechables'},

        {title: 'Devices'},

        {title: 'Hookah'},

        {title: 'Accesorios'},
        
        {title: 'Apparel'}
      ],


      mainDrawer: false,
      searchDrawer: false,
    }),

    methods: {
      goToLandingPage(){
        router.push('/');
      },

      goToShoppingCart(){
        router.push('/cart');
      }
    },

    computed: {
      screenSize() {
        if (this.$vuetify.breakpoint.name == "xs") {
          return "phone";
        }
        if (this.$vuetify.breakpoint.name == "sm") {
          return "phone";
        } else {
          return "desktop";
        }
      }
    }
  }
</script>
