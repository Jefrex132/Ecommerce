<template>
  <div v-if="screenSize=='desktop'">
    <hr>
    <div class="footerContentContainerDesktop">
      <div class="footerContentDesktop">
        <label class="footerLabelDesktop" @click="test">eGift Cards</label>
        <label class="footerLabelDividerDesktop"> | </label> 
        <label class="footerLabelDesktop" @click="test">Cuenta</label>
        <label class="footerLabelDividerDesktop"> | </label> 
        <label class="footerLabelDesktop" @click="goToAbout">Sobre Nosotros</label>
        <br><br>
        <label class="footerLabelDesktop" @click="test">Términos</label>
        <label class="footerLabelDividerDesktop"> | </label>
        <label class="footerLabelDesktop" @click="test">Privacidad</label>
      </div>
      <div class="footerContentDesktop">
        <v-icon class="footerIconDesktop" style="left:82%;">mdi-facebook</v-icon>
        <v-icon class="footerIconDesktop">mdi-instagram</v-icon>
        <br><br>
        <label class="footerLabelDesktop" style="left:32%; color:blue" @click="test">© 2021 King Vape CR | Noah Systems</label>
      </div>
    </div>
    <div style="height:100px"></div>
  </div>
  <div v-else>
    <br>
    <div class="footerContentMobile">
      <hr><br>
      <label class="footerLabelMobile" @click="test">eGift Cards</label>
      <label class="footerLabelDividerMobile"> | </label> 
      <label class="footerLabelMobile" @click="test">Cuenta</label>
      <label class="footerLabelDividerMobile"> | </label> 
      <label class="footerLabelMobile" @click="test">Sobre Nosotros</label>
      <br><br>
      <v-icon class="footerIconMobile">mdi-facebook</v-icon>
      <v-icon class="footerIconMobile">mdi-instagram</v-icon>
      <br><br>
      <label class="footerLabelMobile" @click="test">Términos</label>
      <label class="footerLabelDividerMobile"> | </label>
      <label class="footerLabelMobile" @click="test">Privacidad</label>
      <br><br>
      <label class="footerLabelMobile" style="color:blue;" @click="test">© 2021 King Vape CR | Noah Systems</label>
      <div style="height:50px"></div>
    </div>
  </div>
</template>


<style>
.footerContentContainerDesktop{
  display: grid;
  grid-template-columns: auto auto;
  max-width: 90vw;
  margin: 0 auto;
  top: 60px;
  position: relative;
  justify-content: center;
}

.footerContentDesktop{
  position: relative;
  margin-left: 100px;
  margin-right: 100px;
  width: 30vw;
}

.footerLabelDesktop{
  cursor: pointer;
  position: relative;
  color: gray;
}

.footerLabelDividerDesktop{
  position: relative;
  color: gray;
}

.footerIconDesktop{
  position: relative;
  left: 85%;
  cursor: pointer;
}

/* MOBILE VIEW */
.footerContentMobile{
    text-align: center;
}

.footerLabelMobile{
  cursor: pointer;
  position: relative;
  color: gray;
}

.footerLabelDividerMobile{
  position: relative;
  color: gray;
}

.footerIconMobile{
  position: relative;
  cursor: pointer;
  margin-left: 1vw;
  margin-right: 1vw;
}

</style>

<script>
import router from '../router/index';


export default {
  name: "Footer",

  data: () => ({}),

  methods: {
    goToAbout(){
      router.push('/about')
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
  },
};
</script>
