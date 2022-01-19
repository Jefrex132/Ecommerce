<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
  .v-dialog{
    border: 5px solid rgb(30, 115, 190);
  }
</style>

<script>
export default {
  name: 'App',

  data: () => ({
  }),
};
</script>
