<template>   
    <div v-if="screenSize=='desktop'">
        <div class="imageWithTitleContainerDesktop">
            <v-img
            height="500px"
            :src="require('../assets/images/placeholder.jpg')"
            class="imageWithTitleDesktop"
            >
            <h1 class="imageTitleDesktop">{{ title }}</h1>
            </v-img>
        </div>
    </div>
</template>

<style>
.imageWithTitleContainerDesktop {
  height: 500px;
}

.imageWithTitleDesktop {
  margin: 10px;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
}

.imageTitleDesktop {
  opacity: 1;
  font-size: 50px;
  color: rgb(255, 255, 255);
  position: relative;
  font-family: titleFont;
  animation: showTitle 1s;
}

@keyframes showTitle {
  from {transform: scale(0);}
  to {transform: scale(1);}
}

@font-face {
  font-family: titleFont;
  src: url("../assets/fonts/ethnocentric.ttf");
}
</style>

<script>
export default {
  name: "ImageWithTitle",

  components: {},

  data: () => ({
    title: "Nuestra Historia",
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
