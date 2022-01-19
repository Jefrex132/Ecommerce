<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar/>
      <ImageWithTitle/>
      
      
      <div v-if="screenSize == 'desktop'">
        <br><br><br>
        <div class="accountContainerDesktop">
          <label>¿Perdiste tu contraseña? Por favor, introduce tu nombre de usuario o correo electrónico. Recibirás un enlace para crear una contraseña nueva por correo electrónico.</label>
          <br><br>
          <v-form v-model="valid">
            <v-text-field v-model="firstname" label="Nombre de usuario o correo electrónico*" required></v-text-field>
            <br>
            <button class="buttonLostPasswordFormDesktop">Restablecer contraseña</button>
          </v-form>
        </div>
        <br><br><br>
      </div>

      <div v-else>
        <br><br>
        <div class="accountContainerMobile" style="text-align: justify;">
            <label>¿Perdiste tu contraseña? Por favor, introduce tu nombre de usuario o correo electrónico. Recibirás un enlace para crear una contraseña nueva por correo electrónico.</label>
            <v-form v-model="valid">
            <br>
            <v-text-field v-model="firstname" label="Nombre de usuario o correo electrónico*" required></v-text-field>
            <br>
            <button class="buttonLostPasswordFormDesktop">Restablecer contraseña</button>
          </v-form>
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

  .buttonLostPasswordFormDesktop{
    cursor: pointer;
    position: relative;
    padding: 10px 30px;
    font-size: 15px;
    background-color: rgb(50, 115, 190);
    color: rgb(255, 255, 255);
  }
  

  
</style>


<script>
import WhatsappLogo from "../components/WhatsappLogo.vue";
import Navbar from "../components/Navbar.vue";
import ImageWithTitle from "../components/ImageWithTitle.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Account",

  components: {
    WhatsappLogo,
    ImageWithTitle,
    Navbar,
    Footer,
  },

  data: () => ({}),

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
