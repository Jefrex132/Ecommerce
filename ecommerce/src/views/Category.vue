<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar/>
      <div v-if="screenSize == 'desktop'">
        <br><br><br><br><br><br><br>
        <div style="display: flex;">
          <div style="width: 30%;">
            <div style="margin-left: 60px; margin-right: 60px; display: flex;">
              <v-text-field hide-details outlined dense label="Buscar productos" single-line></v-text-field>
              <v-btn depressed height="40" style="margin-left: 20px;" color="primary">Buscar</v-btn>
            </div>
            <br>
            <div style="margin-left: 60px; margin-right: 60px;">
              <v-range-slider v-model="priceRange" :max="maxPrice" :min="minPrice" hide-details class="align-center">
              </v-range-slider>
            </div>
            <div style="margin-left: 60px; margin-right: 60px; display: flex;">
              <v-btn depressed height="30" color="primary">Filtrar</v-btn>
              <p style="margin-left: 20px; font-size: small; top: 5px; position: relative;">Precio: ₡{{priceRange[0]}} — ₡{{priceRange[1]}}</p>
            </div>
            
            <div style="margin-left: 60px; margin-right: 60px;">
              <br><br>
              <p style="font-size: x-large; color: gray;">Nivel de nicotina</p>     
              <div style="display: flex;">
                <p style="color: rgb(0,132,214); cursor: pointer; margin-right: 7px;">0MG</p>
                <p style="margin-right: 7px;">|</p>
                <p style="color: rgb(0,132,214); cursor: pointer; margin-right: 7px;">3MG</p>
                <p style="margin-right: 7px;">|</p>
                <p style="color: rgb(0,132,214); cursor: pointer; margin-right: 7px;">6MG</p>
              </div>
            </div>

            <div style="margin-left: 60px; margin-right: 60px;">
              <br><br>
              <p style="font-size: x-large; color: gray;">Top 5</p>    
              <template v-for="topProduct in topProducts">
                <div style="display: grid; grid-template-columns: auto auto;" :key="topProduct">
                  <v-img style="position: relative; cursor: pointer;" height="80px" width="90px" contain :src="require('../assets/images/productPlaceholder.jpg')"></v-img>
                  <div style="width: 200px; word-wrap: break-word;"> 
                    <p style="color: rgb(0,132,214); cursor: pointer;">{{topProduct.productName}}</p>
                    <v-rating background-color="warning" color="warning" style="left:-7px; top:-12px; position:relative;" hover length="5" size="15" v-model="topProduct.productRating"></v-rating>
                    <p style="color: gray; font-weight: bold; top: -2px; position: relative;">{{topProduct.productPrice}}</p>
                  </div>
                </div>
                <v-divider :key="topProduct" style="margin-top:0px; margin-bottom:10px;"></v-divider>               
              </template>
            </div>
          </div>

          <div style="border-left: 1px solid rgb(224, 224, 224);"> 
            <div style="margin-left: 60px; margin-right: 60px;">
              <p style="color: rgb(0,132,214); font-size: xx-large; position: relative;">{{categoryName}}</p>
              <br>
              <div style="display: grid; grid-template-columns: auto auto;">
                <div style="text-align: left;">
                  <p>Mostrando {{page}}–{{page*12}} de {{products.length}} resultados</p>
                </div>
                <div style="text-align: right;">
                  <v-select v-model="selectedFilter" :items="['Ordenar por popularidad','Ordenar por calificación media','Ordenar por las últimas','Ordenar por precio: bajo a alto','Ordenar por precio: alto a bajo']" style="position: relative; top: -10px;" outlined dense></v-select>
                </div>
                <br>
              </div>
              <v-container fluid>
                <v-data-iterator :items="products" :items-per-page="12" :page.sync="page" hide-default-footer>
                  <template>
                    <v-row>
                      <v-col v-for="product in products" :key="product" cols="12" sm="6" md="4" lg="3">
                        <v-card flat>
                          <v-img class="categoryProductImageDesktop" height="180px" width="180px" contain :src="require('../assets/images/productPlaceholder.jpg')">
                            <div style="text-align: right;">
                              <v-tooltip left color="black">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-icon color="black" class="shoppingCartCategoryDesktop" v-bind="attrs" v-on="on" @click="addProductToCart(product)">mdi-cart</v-icon>
                                </template>
                                <span>Agregar al carrito</span>
                              </v-tooltip>
                            </div>
                          </v-img>
                          <br>
                          <p style="color: black; font-weight: bold; cursor: pointer;">{{product.productName}}</p>
                          <p style="color: gray; font-size: small; position: relative; top: -5px;">{{product.brandName}}</p>
                          <p style="color: gray; font-weight: bold; position: relative; top: -10px;">{{product.productPrice}}</p>
                          <v-rating background-color="warning" style="left:-7px; top:-22px; position: relative;" color="warning" hover length="5" size="15" v-model="product.productRating"></v-rating>
                        </v-card>
                      </v-col>
                    </v-row>
                  </template>
                  <template v-slot:footer>
                    <v-row class="mt-2" align="center" justify="center">
                      <v-spacer></v-spacer>
                      <span class="mr-4 grey--text"> Página {{ page }} de {{ numberOfPages }}</span>
                      <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>
                      <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                        <v-icon>mdi-chevron-right</v-icon>
                      </v-btn>
                    </v-row>
                  </template>
                </v-data-iterator>
              </v-container>
            </div>
          </div>
        </div>
        <br><br><br>
      </div>


      <div v-else>
        <br><br><br><br><br>
        <div style="width: 90vw; margin: 0 auto;">
          <p style="color: rgb(0,132,214); font-size: xx-large; position: relative;">{{categoryName}}</p>
          <br>
          <p>Mostrando {{page}}–{{page*12}} de {{products.length}} resultados</p>
          <v-select v-model="selectedFilter" :items="['Ordenar por popularidad','Ordenar por calificación media','Ordenar por las últimas','Ordenar por precio: bajo a alto','Ordenar por precio: alto a bajo']" style="position: relative; width: 60vw;" outlined dense></v-select>
        </div>
        <v-container fluid style="width: 95vw; margin: 0 auto;">
            <v-data-iterator :items="products" :items-per-page="12" :page.sync="page" hide-default-footer>
              <template>
                <v-row>
                  <v-col v-for="product in products" :key="product" cols="6" sm="6" md="4" lg="3">
                    <v-card flat>
                      <v-img height="180px" width="180px" contain :src="require('../assets/images/productPlaceholder.jpg')">
                      </v-img>
                      
                      <p style="font-size: large; color: black; font-weight: bold;">{{product.productName}}</p>
                      <p style="color: gray; font-size: medium; position: relative; top: -5px;">{{product.brandName}}</p>
                      <p style="font-size: large; color: gray; font-weight: bold; position: relative; top: -10px;">{{product.productPrice}}</p>
                      <v-rating background-color="warning" style="left:-7px; top:-22px; position: relative;" color="warning" hover length="5" size="12" v-model="product.productRating"></v-rating>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:footer>
                <br>
                <v-row class="mt-2" align="center" justify="center">
                  <v-spacer></v-spacer>
                  <span class="mr-4 grey--text"> Página {{ page }} de {{ numberOfPages }}</span>
                  <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-iterator>
          </v-container>
        <br>
      </div>


      <Footer/>
    </div>
  </div>
</template>


<style>
.categoryProductImageDesktop{
  position: relative; 
  cursor: pointer;
  transition: transform 0.5s;
}

.shoppingCartCategoryDesktop {
  
  position: relative;
  opacity: 0;
  cursor: pointer;
}

.categoryProductImageDesktop:hover{
  transform: scale(1.1);
}

.categoryProductImageDesktop:hover .shoppingCartCategoryDesktop {
  opacity: 1;
}

</style>

<script>
import WhatsappLogo from '../components/WhatsappLogo.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Category",

  components: {
    WhatsappLogo,
    Navbar,
    Footer
  },

  data: () => ({
    /* MODELS */ 
    cartNotification: false,



    minPrice: 0,
    maxPrice: 18000,
    priceRange: [0, 18000],

    categoryName: 'Importados',

    topProducts: [
      {
        productName: 'Nasty Star Gazing 60ML',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Blackberry Candy by Fuggin Salt 30ML',
        productRating: 4,
        productPrice: '₡13,995.00',
        productImage: ''
      }
    ],

    products: [
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Humble',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Humble',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Humble',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Humble',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Blackberry Candy by Fuggin Salt 30ML',
        brandName: 'Humble',
        productRating: 4,
        productPrice: '₡13,995.00',
        productImage: ''
      }
    ],

    page: 1,
    itemsPerPage: 12,
    selectedFilter: 'Ordenar por las últimas'
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

    numberOfPages () {
      return Math.ceil(this.products.length / this.itemsPerPage)
    },

  },

  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },


    addProductToCart(product){
      this.cartNotification = true;
      console.log(product);
    }
  },

};
</script>
