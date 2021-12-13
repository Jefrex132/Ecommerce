<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <LandingPageNavbar />
      <LandingPageCarousel />
      <LandingPageCarouselMessage />
      <LandingPageCard />
      <br>
      <ProductLine />
      <br><br><br><br>
      <ProductLine />
      <br><br><br><br>
      <ProductLine />
    </div>
  </div>
</template>

<script>
import LandingPageNavbar from "../components/LandingPageNavbar.vue";
import LandingPageCarousel from "../components/LandingPageCarousel.vue";
import LandingPageCarouselMessage from "../components/LandingPageCarouselMessage.vue";
import WhatsappLogo from "../components/WhatsappLogo.vue";
import LandingPageCard from "../components/LandingPageCard.vue";
import ProductLine from "../components/ProductLine.vue";

export default {
  name: "LandingPage",

  components: {
    LandingPageNavbar,
    LandingPageCarousel,
    LandingPageCarouselMessage,
    WhatsappLogo,
    LandingPageCard,
    ProductLine
  },
};
</script>
