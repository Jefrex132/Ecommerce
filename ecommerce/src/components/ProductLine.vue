<template>


  <div v-if="screenSize == 'desktop'">
    <h1 class="productLineTitleDesktop">{{ title }}</h1>
    <hr class="productLineLineDesktop" />
    <div class="productLineContainerDesktop">
      <template v-for="product in products">
        <div :key="product" class="productContainerDesktop">
          <div class="imageContainerDesktop">
            <v-img height="230" width="230" :src="require('../assets/images/' + product.imageSource)" class="productImageDesktop" @click="openProduct(product.id)"></v-img>
            <v-tooltip left color="black">
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="black" class="shoppingCartDesktop" v-bind="attrs" v-on="on" @click="addProductToCart(product, true)">mdi-cart</v-icon>
                <v-snackbar right shaped top color="success" app v-model="cartNotification">Se ha agregado {{product.productName}} al carrito.</v-snackbar>
              </template>
              <span>Agregar al carrito</span>
            </v-tooltip>
            
          </div>
          <h2 class="brandNameDesktop" style="font-weight: initial; margin-bottom: 5px;">{{product.brandName}}</h2>
          <h2 class="productNameDesktop" @click="openProduct(product.id)">{{product.productName}}</h2>
          <v-rating background-color="warning" color="warning" hover length="5" size="15" class="ratingDesktop"></v-rating>
          <h2 style="color: gray;" class="productPriceDesktop">₡{{product.productPrice}}</h2>
        </div>
      </template>
    </div>
  </div>


  <div v-else>
    <h1 class="productLineTitleMobile">{{ title }}</h1>
    <hr class="productLineLineMobile" />
    <div class="productLineContainerMobile">
      <template v-for="product in products">
        <div :key="product" class="productContainerMobile">
          <div class="imageContainerMobile">
            <v-img height="170" :src="require('../assets/images/' + product.imageSource)"></v-img>
            <h2 class="brandNameMobile">{{product.brandName}}</h2>
            <h2 class="productNameMobile">{{product.productName}}</h2>
            <v-rating background-color="warning" color="warning" hover length="5" size="8" class="ratingMobile"></v-rating>
            <h2 class="productPriceMobile">₡{{product.productPrice}}</h2>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>


<style>
  .v-dialog{
    border: initial;
  }

/* DESKTOP VIEW */ 
.productLineContainerDesktop {
  display: grid;
  grid-template-columns: auto auto auto auto;
  max-width: 1100px;
  margin: 0 auto;
  top: 60px;
  position: relative;
  justify-content: center;
}

.productLineTitleDesktop {
  top: 10px;
  position: relative;
  text-align: center;
}

.productLineLineDesktop {
  width: 100px;
  top: 25px;
  position: relative;
  margin: 0 auto;
  border-color: black;
}

.productContainerDesktop {
  width: 230px;
  height: 330px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  top: -15px;
}

.imageContainerDesktop {
  position: absolute;
  z-index: 0;
  width: 230px;
  height: 230px;
}

.productImageDesktop {
  transition: transform 0.5s;
  cursor: pointer;
  position: absolute;
  z-index: 1;
}

.shoppingCartDesktop {
  position: absolute;
  top: 10px;
  left: 190px;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}

.imageContainerDesktop:hover .shoppingCartDesktop {
  opacity: 1;
}

.imageContainerDesktop:hover .productImageDesktop {
  transform: scale(1.1);
}

.brandNameDesktop{
    position: relative;
    top: 230px;
    color: gray;
    font-size: 15px;
}

.productNameDesktop{
    position: relative;
    top: 230px;
    color: black;
    font-size: 15px;
    overflow-y: hidden;
    cursor: pointer;
}

.ratingDesktop{
    position: relative;
    top: 230px;
    left: -9px;
}

.productPriceDesktop{
    position: relative;
    top: 230px;
    font-size: 15px;
    color: rgb(58, 58, 58);
}

/* MOBILE VIEW */ 
.productLineTitleMobile {
  top: 10px;
  position: relative;
  text-align: center;
}

.productLineLineMobile {
  width: 100px;
  top: 25px;
  position: relative;
  background-color: black;
  margin: 0 auto;
  border-color: black;
}

.productLineContainerMobile {
  display: grid;
  grid-template-columns: auto auto;
  max-width: 85vw;
  margin: 0 auto;
  top: 45px;
  position: relative;
  justify-content: center;
}

.productContainerMobile {
  width: 34vw;
  height: 350px;
  margin: 10px;
  position: relative;
}

.imageContainerMobile{
  position: absolute;
  z-index: 0;
  width: 34vw;
  height: 170px;
}

.shoppingCartMobile {
  position: absolute;
  top: -165px;
  left: 25vw;
  z-index: 2;
  opacity: 1;
  cursor: pointer;
}


.brandNameMobile{
    position: relative;
    top: 0px;
    color: gray;
    font-size: 15px;
}

.productNameMobile{
    position: relative;
    top: 0px;
    color: black;
    font-size: 15px;
    overflow-y: hidden;
}

.ratingMobile{
    position: relative;
    top: 0px;
    left: -9px;
}

.productPriceMobile{
    position: relative;
    top: 0px;
    font-size: 15px;
    color: rgb(58, 58, 58);
}


</style>


<script>
//import router from '../router';
export default {
  /* MODELS */
  cartNotification: false, 


  
  name: "ProductLine",

  data: () => ({
    title: "PUFFS",
    products: [],
  }),

  methods: {
    addProductToCart(product, state){
      if(state){
        this.cartNotification = true;
      }
      else{
        this.cartNotification = false;
      }
    },

    openProduct(id){
      let localidad = 'King Vape';
      var productURL = location.origin + '/product/' + id + '/' + localidad;
      location.assign(productURL);
    },

  },

  created(){
    const url = 'http://pruebas.noah.cr/Backend/api/Top4Vistatemporada/SelectTop4Temporada/King%20Vape'
    this.$http.get(url).then((result) => {
      for(var product in result.data){
        this.products.push(
          {
          id:result.data[product].codigo,
          brandName:result.data[product].marca, 
          productName:result.data[product].descripcion, 
          productPrice:result.data[product].precioVenta,
          imageSource: "productPlaceholder.jpg"
          })
      }
    })
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
