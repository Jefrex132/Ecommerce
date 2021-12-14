<template>
  <div class="perksContainerDesktop" v-if="screenSize=='desktop'">
    <template v-for="perk in perks">
        <div :key="perk" class="perkContainerDesktop">
          <v-icon size="50" color="black">mdi-{{perk.icon}}</v-icon>
          <h1 class="perkTitleDesktop">{{perk.title}}</h1>
          <h1 class="perkMessageDesktop">{{perk.message}}</h1>
        </div>
    </template>
  </div>
  <div class="perksContainerMobile" v-else>
    <template v-for="perk in perks">
      <div :key="perk" class="perkContainerMobile">
        <v-icon size="5vw" color="black">mdi-{{perk.icon}}</v-icon>
        <h1 class="perkTitleMobile">{{perk.title}}</h1>
        <h1 class="perkMessageMobile">{{perk.message}}</h1>
        <br>
      </div>
    </template>
  </div>
</template>

<style>
.perksContainerDesktop{
  display: grid;
  grid-template-columns: auto auto auto auto;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  height: 280px;
}

.perkContainerDesktop{
  text-align: center;
  width: 230px;
  margin-left: 20px;
  margin-right: 20px;
}

.perkTitleDesktop{
  color: rgb(0, 0, 0);
  font-size: 20px;
  position: relative;
  top: 15px;
}

.perkMessageDesktop{
  color: gray;
  font-size: 16px;
  position: relative;
  top: 25px;
}


/* MOBILE VIEW */
.perksContainerMobile{
  display: grid;
  grid-template-columns: auto auto;
  max-width: 80vw;
  margin: 0 auto;
  position: relative;
  justify-content: center;
}

.perkContainerMobile{
  text-align: center;
  width: 40vw;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.perkTitleMobile{
  color: rgb(0, 0, 0);
  font-size: 3vw;
  position: relative;
  top: 15px;
}

.perkMessageMobile{
  color: gray;
  font-size: 2.5vw;
  position: relative;
  top: 25px;
}

</style>

<script>
export default {
  name: "LandingPagePerks",

  components: {},

  data: () => ({
      perks: [
          {
              icon: 'truck',
              title: 'ENVÍO',
              message: 'Envío GRATIS a cualquier parte de Costa Rica en compras mayores a 10.000 colones.'
          },
          {
              icon: 'tag',
              title: 'DESCUENTOS',
              message: '¿Queres recibir cupones de descuento? Simple, registrate a nuestra lista VIP!'
          },
          {
              icon: 'archive',
              title: 'ACCESIBILIDAD',
              message: 'Nos especializamos en líquidos de la mejor calidad, buscamos los productos más complejos de localizar en Costa Rica.'
          },
          {
              icon: 'lock',
              title: 'CONFIABLE',
              message: 'Nuestro sitio está protegido por Crossfire.Network de acuerdo con los últimos estándares.'
          }
      ]
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
