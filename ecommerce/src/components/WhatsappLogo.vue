<template>
  <div class="logoContainerDesktop" v-if="screenSize == 'desktop'">
    <a href="https://wa.me/50672527633">
      <v-img
        src="@/assets/images/whatsapp.png"
        height="30px"
        width="30px"
        @click="goToWhatsapp"
        class="logoDesktop"
      ></v-img>
    </a>
  </div>
  <div class="logoContainerMobile" v-else>
    <a href="https://wa.me/50672527633">
      <v-img
        src="@/assets/images/whatsapp.png"
        height="22px"
        width="22px"
        @click="goToWhatsapp"
        class="logoMobile"
      ></v-img>
    </a>
  </div>
</template>

<style>
.logoContainerDesktop {
  position: fixed;
  background-color: white;
  z-index: 2;
  top: calc(100vh - 100px);
  left: calc(100vw - 120px);
  height: 70px;
  width: 70px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.678);
}

.logoContainerMobile {
  position: fixed;
  background-color: white;
  z-index: 2;
  top: calc(100vh - 80px);
  left: calc(100vw - 80px);
  height: 50px;
  width: 50px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.678);
}

.logoDesktop {
  cursor: pointer;
  margin: auto;
  top: 20px;
}

.logoMobile {
  cursor: pointer;
  margin: auto;
  top: 14px;
}

.logoDesktop:hover{
  transform: scale(1);
  animation: pulse 0.8s infinite;
}

.logoMobile:active{
  transform: scale(0.7);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>

<script>
import router from "../router/index";

export default {
  name: "WhatsappLogo",

  data: () => ({}),

  methods: {
    goToWhatsapp() {
      router.push("");
    },
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
