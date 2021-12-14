<template>
  <div class="navbarContainer">
    <v-toolbar class="navbar">
      <v-toolbar-side-icon>
        <v-img src="@/assets/images/kingvapelogo.png" height="70px" width="150px" @click="goToLandingPage" class="navbarImage"></v-img>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>

      <template v-for="option in options">
        <v-menu open-on-hover bottom :key="option" offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" style="margin-left:10px; margin-right:10px; margin-top:45px; position:relative;">{{option.title}}</v-btn>
          </template>

          <v-list>
            <template v-for="suboption in option.suboptions">
              <v-list-item :key="suboption" @click="prueba">

                <v-menu open-on-hover bottom offset-x :key="subsuboption">
                  <template v-slot:activator="{ on, attrs }">
                    <h4 style="color:black;" v-bind="attrs" v-on="on">{{suboption.title}}</h4>
                  </template>

                  <v-list>
                    <template v-for="subsuboption in suboption.subsuboptions">
                      <v-list-item :key="subsuboption" @click="prueba">
                        <v-list-item-title>{{subsuboption.title}}</v-list-item-title>
                      </v-list-item>
                    </template>

                  </v-list>
                  

                </v-menu>



              </v-list-item>
            </template>
          </v-list>
          
        </v-menu>
      </template>



    </v-toolbar>
  </div>
</template>


<style>

  .navbarContainer{
    position: relative;
    height: 0px;
    z-index:1; 
  }

  .navbar{
    height: 110px !important;
    background-color: rgba(110, 110, 110, 0.384) !important;
  }

  .navbarImage{
    top: 24px; 
    left: 90px;
    cursor: pointer;
  }

</style>



<script>
  import router from '../router/index';
  export default {
    name: 'Navbar',

    data: () => ({ 
      options: [
        {title: 'e-Liquids', suboptions:[
          {title:'Importados', subsuboptions: [
            {title: 'AIR FACTORY'},
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
      ]
    }),

    methods: {
      goToLandingPage(){
        router.push('')
      },

      prueba(){
        console.log("prueba")
      }
    }
  }
</script>
