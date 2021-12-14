<template>
  <div v-if="screenSize=='desktop'">
    <br><br><br><br>
    <div class="subscribeContainerDesktop">
      <v-img
        height="600px"
        :src="require('../assets/images/placeholder.jpg')"
        class="subscribeImageDesktop"
      >
        <div class="labelContainerDesktop">
          <h1 class="titleLabelDesktop">{{ title }}</h1>
          <br />
          <h1 class="messageLabelDesktop">{{ message }}</h1>
          <br />
          <v-form v-model="valid">
            <v-text-field
              v-model="firstname"
              style="width: 700px; position: relative; left: 100px"
              label="Nombre*"
              required
              dark
            ></v-text-field>
            <v-text-field
              v-model="email"
              style="width: 700px; position: relative; left: 100px"
              label="Correo Electrónico*"
              required
              dark
            ></v-text-field>
            <br />
            <button class="buttonDesktop">UNIRME</button>
          </v-form>
        </div>
      </v-img>
    </div>
  </div>

  <div v-else>
    <br />
    <div class="subscribeContainerMobile">
      <v-img
        height="500px"
        :src="require('../assets/images/placeholder.jpg')"
        class="subscribeImageMobile"
      >
        <br />
        <h1 class="titleLabelMobile">{{ title }}</h1>
        <br />
        <h1 class="messageLabelMobile">{{ message }}</h1>
        <br />
        <br />
        <v-form v-model="valid">
          <v-text-field
            v-model="firstname"
            style="width: 60vw; margin:0 auto;"
            label="Nombre*"
            required
            dark
          ></v-text-field>
          <v-text-field
            v-model="email"
            style="width: 60vw; margin:0 auto;"
            label="Correo Electrónico*"
            required
            dark
          ></v-text-field>
          <br />
          <button class="buttonMobile">UNIRME</button>
        </v-form>
      </v-img>
    </div>
    <br>
  </div>
</template>

<style>
.subscribeContainerDesktop {
  height: 650px;
}

.subscribeImageDesktop {
  margin: 10px;
}

.labelContainerDesktop {
  height: 420px;
  position: relative;
  top: 80px;
}

.titleLabelDesktop {
  font-size: 50px;
  color: rgb(255, 239, 0);
  position: relative;
  left: 100px;
  font-family: titleFont;
}

.messageLabelDesktop {
  font-size: 20px;
  color: rgb(255, 255, 255);
  position: relative;
  left: 100px;
  max-width: 650px;
}

.buttonDesktop {
  cursor: pointer;
  position: relative;
  padding: 15px 55px;
  font-size: 15px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  left: 100px;
}

/* MOBILE VIEW */
.subscribeContainerMobile {
  height: 500px;
}

.subscribeImageMobile {
  margin: 2vw;
  text-align: center;
}

.titleLabelMobile {
  font-size: 8vw;
  color: rgb(255, 239, 0);
  position: relative;
  font-family: titleFont;
}

.messageLabelMobile {
  font-size: 5vw;
  color: rgb(255, 255, 255);
  position: relative;
  max-width: 90vw;
  margin: 0 auto;
}

.buttonMobile {
  cursor: pointer;
  position: relative;
  padding: 5vw 10vw;
  font-size: 4vw;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

@font-face {
  font-family: titleFont;
  src: url("../assets/fonts/ethnocentric.ttf");
}
</style>

<script>
export default {
  name: "LandingPageSubscribe",

  components: {},

  data: () => ({
    title: "SUSCRIBETE",
    message:
      "¡Y obten descuentos especiales, promociones y noticias únicas al registrarte a nuestro boletín informativo!",
  }),

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
  },
};
</script>