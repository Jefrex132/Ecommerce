<template>
  <div>
    <PrivacyDialog/>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar />
      <LandingPageCarousel />
      <LandingPageCarouselMessage />
      <br><br>
      <LandingPageBrandCarousel />
      <LandingPageCard />
      <br>
      <ProductLine />
      <div v-if="screenSize == 'desktop'">
        <br><br><br><br>
      </div>
      <div v-else>
        <br><br><br>
      </div>
      <ProductLine />
      <div v-if="screenSize == 'desktop'">
        <br><br><br><br>
      </div>
      <div v-else>
        <br><br><br>
      </div>
      <ProductLine />
      <LandingPageSubscribe/>
      <LandingPagePerks/>
      <Footer/>
    </div>
  </div>
</template>

<style>

</style>

<script>
import Navbar from "../components/Navbar.vue";
import LandingPageCarousel from "../components/LandingPageCarousel.vue";
import LandingPageCarouselMessage from "../components/LandingPageCarouselMessage.vue";
import LandingPageBrandCarousel from "../components/LandingPageBrandCarousel.vue";
import WhatsappLogo from "../components/WhatsappLogo.vue";
import LandingPageCard from "../components/LandingPageCard.vue";
import ProductLine from "../components/ProductLine.vue";
import LandingPageSubscribe from "../components/LandingPageSubscribe.vue"
import LandingPagePerks from "../components/LandingPagePerks.vue"
import Footer from "../components/Footer.vue"
import PrivacyDialog from "../components/PrivacyDialog.vue"

export default {
  name: "LandingPage",

  components: {
    Navbar,
    LandingPageCarousel,
    LandingPageCarouselMessage,
    LandingPageBrandCarousel,
    WhatsappLogo,
    LandingPageCard,
    ProductLine,
    LandingPageSubscribe,
    LandingPagePerks,
    Footer,
    PrivacyDialog
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
