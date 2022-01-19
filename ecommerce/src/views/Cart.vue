<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar />

    
      <template v-if="screenSize == 'desktop'">
        <br><br><br><br><br><br><br>
        <h1 class="cartTitle">Carrito</h1>
      </template>
      <template v-else>
        <br><br><br><br><br>
        <h1 class="cartTitle" style="font-size: xx-large;">Carrito</h1>
      </template>
      <CartTable/>

      <Footer/>
    </div>
  </div>
</template>


<style>
.cartTitle {
  font-size: xxx-large;
  text-align: center;
  color: gray;
  position: relative;
  font-family: titleFont;
}

@font-face {
  font-family: titleFont;
  src: url("../assets/fonts/ethnocentric.ttf");
}
</style>


<script>
import Navbar from "../components/Navbar.vue";
import WhatsappLogo from "../components/WhatsappLogo.vue";
import Footer from "../components/Footer.vue"
import CartTable from "../components/CartTable.vue";

export default {
  name: "Cart",

  components: {
    Navbar,
    WhatsappLogo,
    Footer,
    CartTable
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
