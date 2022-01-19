<template>
  <div v-if="screenSize=='desktop'">
    <hr>
    <div class="footerContentContainerDesktop">
      <div class="footerContentDesktop">
        <label class="footerLabelDesktop" @click="test">eGift Cards</label>
        <label class="footerLabelDividerDesktop"> | </label> 
        <label class="footerLabelDesktop" @click="goToAccount">Cuenta</label>
        <label class="footerLabelDividerDesktop"> | </label> 
        <label class="footerLabelDesktop" @click="goToAbout">Sobre Nosotros</label>
        <br><br>
        <label class="footerLabelDesktop" @click="goToTerms">Términos</label>
        <label class="footerLabelDividerDesktop"> | </label>
        <label class="footerLabelDesktop" @click="goToPrivacy">Privacidad</label>
      </div>
      <div class="footerContentDesktop">
        <div style="text-align: right;">
          <a href="https://www.facebook.com/King-Vape-CR-2398538153758930/">
            <v-icon class="footerIconDesktop">mdi-facebook</v-icon>
          </a>
          <a href="https://www.instagram.com/kingvape_costarica/">
            <v-icon class="footerIconDesktop">mdi-instagram</v-icon>
          </a>
        </div>
        <br>
        <div style="text-align: right;">
          <a href="https://www.noah.cr/">
            <label class="footerLabelDesktop" style="color:blue" @click="test">© 2021 King Vape CR | Noah Systems</label>
          </a>
        </div>
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
      <label class="footerLabelMobile" @click="goToAccount">Cuenta</label>
      <label class="footerLabelDividerMobile"> | </label> 
      <label class="footerLabelMobile" @click="goToAbout">Sobre Nosotros</label>
      <br><br>
      <a href="https://www.facebook.com/King-Vape-CR-2398538153758930/">
        <v-icon class="footerIconMobile">mdi-facebook</v-icon>
      </a>
      <a href="https://www.instagram.com/kingvape_costarica/">
        <v-icon class="footerIconMobile">mdi-instagram</v-icon>
      </a>
      <br><br>
      <label class="footerLabelMobile" @click="goToTerms">Términos</label>
      <label class="footerLabelDividerMobile"> | </label>
      <label class="footerLabelMobile" @click="goToPrivacy">Privacidad</label>
      <br><br>
      <a href="https://www.noah.cr/">
        <label class="footerLabelMobile" style="color:blue;" @click="test">© 2021 King Vape CR | Noah Systems</label>
      </a>
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
  cursor: pointer;
  margin-left: 10px;
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

a:-webkit-any-link{
  text-decoration:none !important;
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
    },
    goToPrivacy(){
      router.push('/privacy')
    },
    goToTerms(){
      router.push('/terms')
    },
    goToAccount(){
      router.push('/account')
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
