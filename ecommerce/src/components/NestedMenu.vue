<template>
<div v-if="screenSize == 'desktop'">

</div>

  <div v-else>
    <template v-for="option in options">
        
        <div :key="option" v-if="option.options">
          <v-expansion-panels accordion flat>
            <v-expansion-panel style="width:100%; background-color: rgb(244, 244, 244);">
              <v-expansion-panel-header>{{option.title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <NestedMenu :options="option.options"></NestedMenu>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <div :key="option" v-else>
          <v-expansion-panels accordion flat>
            <div style="position: relative; width: 100%; background-color: rgb(244, 244, 244);">
              <p style="position: relative; margin-left: 25px; margin-top: 11px; margin-bottom: 11px;">{{option.title}}</p>
            </div>
          </v-expansion-panels>
        </div>
        
      </template>
  </div>
</template>



<script>
  import NestedMenu from '../components/NestedMenu.vue'

  export default {
    
    components: {NestedMenu},
    props: ["options"],

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
