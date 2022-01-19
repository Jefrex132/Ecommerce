<template>
  <div v-if="screenSize == 'desktop'">
    <v-dialog v-model="privacyDialog" width="500" persistent>
      <v-card style="text-align: center;">
        <br><br>
        <v-card-text style="color: black; font-size: xx-large; font-weight: bold;">
          Contenido Restringido
        </v-card-text>
        <br>
        <v-card-text style="color: black; font-size: medium;">
          Este sitio web contiene productos con nicotina. La nicotina es un químico adictivo. Usted debe de ser mayor de 18 años para poder navegar por la página. De lo contrario, ¡salga y cierre este sitio web inmediatamente!
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: center;">
          <v-btn color="primary" style="margin-right: 20px;" @click="privacyDialog = false">Si, soy mayor de edad</v-btn>
          <v-btn color="white" style="margin-left: 20px;">Abandonar sitio</v-btn>
        </v-card-actions>
        <br>
      </v-card>
    </v-dialog>
  </div>


  <div v-else>
    <v-dialog v-model="privacyDialog" width="80vw" persistent>
      <v-card style="text-align: center;">
        <br><br>
        <v-card-text style="color: black; font-size: large; font-weight: bold;">
          Contenido Restringido
        </v-card-text>
        <br>
        <v-card-text style="color: black;">
          Este sitio web contiene productos con nicotina. La nicotina es un químico adictivo. Usted debe de ser mayor de 18 años para poder navegar por la página. De lo contrario, ¡salga y cierre este sitio web inmediatamente!
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: center;">
          <v-btn color="primary" @click="privacyDialog = false">Si, soy mayor de edad</v-btn>
        </v-card-actions>
        <v-card-actions style="display: flex; justify-content: center;">
          <v-btn color="white" style="margin-left: 1vw;">Abandonar sitio</v-btn>
        </v-card-actions>

        <br>
      </v-card>
    </v-dialog>
  </div>


</template>

<script>
  export default {

    data () {
      return {
        privacyDialog: true,
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
  }
</script>