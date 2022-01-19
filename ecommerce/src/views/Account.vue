<template>
  <div>
    <div>
      <WhatsappLogo/>
    </div>
    <div>
      <Navbar/>
      <ImageWithTitle/>
      
      <div v-if="screenSize == 'desktop'">
        <br><br><br>
        <div class="accountContainerDesktop">
          <h2 class="accountTitleLabel">Acceder</h2>
          <br>
          <div class="formContainerDesktop">
            <br>
            <v-form v-model="valid">
              <v-text-field outlined v-model="firstname" class="textFieldDesktop" style="top:10px;" label="Nombre de usuario o correo electrónico*" required></v-text-field>
              <v-text-field outlined v-model="email" class="textFieldDesktop" style="top:10px;" label="Contraseña*" required></v-text-field>
              <v-checkbox v-model="remindUser" label="Recuérdame" class="remindUserCheckboxDesktop"></v-checkbox>
              <button class="buttonFormDesktop">Acceder</button>
            </v-form>
            <br>
            <label @click="goToLostPassword" class="labelFormDesktop">¿Olvidaste la contraseña?</label>
            <br><br>
          </div>
        </div>
        <br><br><br>
      </div>

      <div v-else>
        <br>
        <div class="accountContainerMobile">
          <h2 class="accountTitleLabel">Acceder</h2>
          <br>
          <div class="formContainerDesktop">
            <v-form v-model="valid">
              <v-text-field outlined v-model="firstname" class="textFieldMobile" style="position:relative; top:20px;" label="Nombre de usuario o correo electrónico*" required></v-text-field>
              <v-text-field outlined v-model="email" class="textFieldMobile" label="Contraseña*" style="top:15px;" required></v-text-field>
              <v-checkbox v-model="remindUser" label="Recuérdame" class="remindUserCheckboxMobile"></v-checkbox>
              <button class="buttonFormMobile">Acceder</button>
            </v-form>
            <br>
            <label @click="goToLostPassword" class="labelFormMobile">¿Olvidaste la contraseña?</label>
            <br><br>
          </div>
          <br>
        </div>
      </div>
      
      <Footer/>
    </div>
  </div>
</template>

<style>
  .accountContainerDesktop{
    position: relative;
    margin: 0 auto;
    width: 1000px;
  }

  .accountContainerMobile{
    position: relative;
    margin: 0 auto;
    width: 85vw;
  }

  .formContainerDesktop{
    position: relative;
    border-style: solid;
    border-width: thin;
    border-color: rgb(206, 206, 206);
    border-radius: 5px;
  }

  .textFieldDesktop{
    width: 900px; 
    position: relative; 
    left: 50px;
  }

  .textFieldMobile{
    width: 70vw;
    
    position: relative; 
    left: 20px;
    font-size: 2vw;
  }

  .remindUserCheckboxDesktop{
    top: -10px;
    position: relative;
    left: 50px;
  }

  .remindUserCheckboxMobile{
    position: relative;
    left: 10px;
  }

  .buttonFormDesktop{
    cursor: pointer;
    position: relative;
    padding: 10px 30px;
    font-size: 15px;
    background-color: rgb(50, 115, 190);
    color: rgb(255, 255, 255);
    left: 50px;
  }

  .buttonFormMobile{
    cursor: pointer;
    position: relative;
    padding: 10px 30px;
    font-size: 15px;
    background-color: rgb(50, 115, 190);
    color: rgb(255, 255, 255);
    left: 10px;
  }

  .labelFormDesktop{
    position: relative;
    left: 50px;
    cursor: pointer;
    color: rgb(0, 132, 214);
  }

  .labelFormMobile{
    position: relative;
    left: 10px;
    cursor: pointer;
    color: rgb(0, 132, 214);
  }

</style>


<script>
import WhatsappLogo from "../components/WhatsappLogo.vue";
import Navbar from "../components/Navbar.vue";
import ImageWithTitle from "../components/ImageWithTitle.vue";
import Footer from "../components/Footer.vue";
import router from '../router';

export default {
  name: "Account",

  components: {
    WhatsappLogo,
    ImageWithTitle,
    Navbar,
    Footer,
  },

  data: () => ({}),

  methods: {
    goToLostPassword(){
      router.push('account/lostPassword')
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
    },
  }
};
</script>
