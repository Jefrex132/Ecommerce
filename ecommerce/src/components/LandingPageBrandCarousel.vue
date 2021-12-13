<template>
    <div>
        <v-carousel style="width:1000px; height:170px; top:50px; margin:auto;" hide-delimiters> 
            <template v-for="(item, index) in brands"> 
                <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" :key="index"> 
                    <v-row class="flex-nowrap" style="height:100%"> 
                        <template v-for="(n,i) in columns"> 
                            <template v-if="(+index + i) < brands.length"> 
                                <v-col :key="i"> 
                                    <v-sheet v-if="(+index + i) < brands.length" height="130px">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <v-img src="@/assets/images/whatsapp.png" height="60px" width="60px"></v-img>
                                        </v-row>
                                    </v-sheet>
                                </v-col> 
                            </template> 
                        </template> 
                    </v-row> 
                </v-carousel-item> 
            </template> 
        </v-carousel>
    </div>
</template>

<style>
    .navbarImage{
        top: 24px; 
        left: 90px;
        cursor: pointer;
    }
</style>

<script>

    export default {
        name: 'LandingPage',

        data: () => ({
            brands: [
                "red", 
                "green", 
                "orange", 
                "blue", 
                "pink", 
                "purple", 
                "indigo", 
                "cyan", 
                "deep-purple", 
                "light-green", 
                "deep-orange", 
                "blue-grey"
            ]
        }),

        computed: {
            columns() {return 5}
        },
    }
</script>
