<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar />
      <LandingPageCarousel />
      <LandingPageCarouselMessage />
      <LandingPageCard />
      <br>
      <ProductLine />
      <br><br><br><br>
      <ProductLine />
      <br><br><br><br>
      <ProductLine />
      <LandingPageSubscribe/>
      <LandingPagePerks/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import LandingPageCarousel from "../components/LandingPageCarousel.vue";
import LandingPageCarouselMessage from "../components/LandingPageCarouselMessage.vue";
import WhatsappLogo from "../components/WhatsappLogo.vue";
import LandingPageCard from "../components/LandingPageCard.vue";
import ProductLine from "../components/ProductLine.vue";
import LandingPageSubscribe from "../components/LandingPageSubscribe.vue"
import LandingPagePerks from "../components/LandingPagePerks.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "LandingPage",

  components: {
    Navbar,
    LandingPageCarousel,
    LandingPageCarouselMessage,
    WhatsappLogo,
    LandingPageCard,
    ProductLine,
    LandingPageSubscribe,
    LandingPagePerks,
    Footer
  },
};
</script>
