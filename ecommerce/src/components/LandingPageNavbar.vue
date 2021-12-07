<template>
  <div class="navbarContainer">
      <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>


<style>

  .navbarContainer{
    position: relative;
    top: -600px;
  }

</style>



<script>
  export default {
    name: 'LandingPageNavbar',

    data: () => ({
    }),

  }
</script>
