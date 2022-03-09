<template>
    <swiper class="swiper" :options="swiperOption" style="height: 200px; max-width: 1100px; margin: 0 auto;">
        <template v-for="brand in brands">
            <swiper-slide :key="brand">
                <v-img :src="brand.imageSource"></v-img>
            </swiper-slide>
        </template>
    </swiper>
</template>


<style>
    .navbarImage{
        top: 24px; 
        left: 90px;
        cursor: pointer;
    }
</style>


<script>
//import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

    export default {
        name: 'LandingPage',

        created(){
            const url = 'https://localhost:44388/api/Carrusel/SelectBrands/King%20Vape/1'
            this.$http.get(url).then((result) => {
                for(var brand in result.data){
                    this.brands.push({imageSource: result.data[brand].foto})
                }
            })
        },
        

        data: () => ({
            swiperOption: {
                slidesPerView: 7,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },

            brands: []
        })
    }
</script>
