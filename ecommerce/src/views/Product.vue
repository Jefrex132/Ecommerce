<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar/>
      <div v-if="screenSize == 'desktop'">
        <br><br><br><br><br><br><br>
        <div style="display: flex; width: 1200px; margin: 0 auto;">
          <div>
            <v-img height="400px" width="400px" contain :src="require('../assets/images/productPlaceholder.jpg')">
            </v-img>
          </div>
          <div style="width: 60vw; text-align: justify;">
            <br>
            <p style="font-size: xx-large">{{productName}}</p>
            <br>
            <p style="white-space: pre-line;">{{mainInfo}}</p>
            <br>
            <p style="font-size: x-large; font-weight: bold; color: gray; ">{{productPrice}}</p>

            <div v-if="nicotinLevels">
              <p style="font-size: large; font-weight: bold; color: gray; ">Nicotina</p>
              <v-select v-model="selectedNicotinLevel" :items="nicotinLevels" style="position: relative; top: -10px; " outlined dense></v-select>
              <div v-if="selectedNicotinLevel!='Elige una opción'">
                <v-divider></v-divider>
                <br>
                <label>Disponibilidad: </label>
                <label v-if="availableProductAmount>0" style="color: green;">Hay existencias</label>
                <label v-else style="color: red;">No hay existencias</label>
                <br><br>
                <div class="amountContainerMobile" style="float: left;">            
                  <v-icon size="20" class="deleteProductIconMobile" style="margin-left:0px; margin-right: 7px; margin-top: 5px; margin-bottom: 5px;">mdi-minus</v-icon>
                  <label class="cartPayLabelMobile" style="margin-left:0px; margin-right: 0px; margin-top: 5px; margin-bottom: 5px;">{{productAmount}}</label>
                  <v-icon size="20" class="deleteProductIconMobile" style="margin-left:5px; margin-right: 3px; margin-top: 5px; margin-bottom: 5px;">mdi-plus</v-icon>
                </div>
                <v-btn color="primary" elevation="2" style="left: 30px; top: -2px;">Añadir al carrito</v-btn>
                <br><br>
                <v-divider></v-divider>
                <br>
              </div>
              <p>SKU: {{SKU}}</p>
              <p>Categoría: {{productCategory}}</p>
            </div>
            <div v-else>
              <label>Disponibilidad: </label>
              <label v-if="availableProductAmount>0" style="color: green;">Hay existencias</label>
              <label v-else style="color: red;">No hay existencias</label>
              <br><br>
              <v-divider></v-divider>
              <br>
              <v-btn color="primary" elevation="2">Añadir al carrito</v-btn>
              <br><br>
              <v-divider></v-divider>
              <br>
              <p>SKU: {{SKU}}</p>
              <p>Categoría: {{productCategory}}</p>
            </div>
          </div>
        </div>
        <br>

        <div style="width: 1200px; margin: 0 auto;">
          <v-divider></v-divider>
          <br>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab>
              Valoraciones ({{ratings.length}})
            </v-tab>
            <v-tab>
              Características
            </v-tab>
          </v-tabs>
          
          <br><br>
          <v-tabs-items v-model="tab" style="margin-left: 50px; margin-right: 50px;">
            <v-tab-item>
              <v-card flat>
                <div v-if="ratings.length==0">
                  <p style="white-space: pre-line;">{{noRatings}}</p>
                </div>
                <div v-else>
                  <template v-for="rating in ratings">
                    <div :key="rating" style="border: 1px solid rgb(224, 224, 224);">
                      <p style="font-size:large; font-weight: bold; margin-left: 20px; margin-top: 20px; ">{{rating.username}}</p>
                      <p style="white-space: pre-line; margin-left: 20px;">{{rating.comment}}</p>
                      <v-rating background-color="warning" style="margin-left: 10px; margin-bottom: 20px;" readonly color="warning" hover length="5" size="15" v-model="rating.rating"></v-rating>
                    </div>   
                    <br :key="rating"> 
                  </template>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <p style="white-space: pre-line; text-align: justify;">{{extraInfo}}</p>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <br><br>

          <p style="font-size: x-large; font-weight: bold;">Productos relacionados</p>
          <div style="display:flex;">
            <div v-for="relatedProduct in relatedProducts" :key="relatedProduct" style="margin: 20px;">
              <v-img height="200px" width="200px" contain :src="require('../assets/images/productPlaceholder.jpg')" class="categoryProductImageDesktop">
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
              <p style="color: black; font-weight: bold; cursor: pointer;">{{relatedProduct.productName}}</p>
              <p style="color: gray; font-size: small; position: relative; top: -5px;">{{relatedProduct.brandName}}</p>
              <p style="color: gray; font-weight: bold; position: relative; top: -10px;">{{relatedProduct.productPrice}}</p>
              <v-rating background-color="warning" style="left:-7px; top:-22px; position: relative;" readonly color="warning" hover length="5" size="15" v-model="relatedProduct.productRating"></v-rating>
            </div>
          </div>
        </div>
      <br><br>
      </div>


      <div v-else>
        <br><br><br>
        <div style="width: 85vw; margin: 0 auto; text-align: justify;">
          <v-img height="400px" width="400px"  contain :src="require('../assets/images/productPlaceholder.jpg')">          
          </v-img>
          <p style="font-size: xx-large; color: black;">{{productName}}</p>
          <br>
          <p style="white-space: pre-line;">{{mainInfo}}</p>
          <br>
          <p style="font-size: x-large; font-weight: bold; color: gray; ">{{productPrice}}</p>


          <div v-if="nicotinLevels">
            <p style="font-size: large; font-weight: bold; color: gray; ">Nicotina</p>
            <v-select v-model="selectedNicotinLevel" :items="nicotinLevels" style="position: relative; top: -10px; " outlined dense></v-select>
            <div v-if="selectedNicotinLevel!='Elige una opción'">
              <v-divider></v-divider>
              <br>
              <label>Disponibilidad: </label>
              <label v-if="availableProductAmount>0" style="color: green;">Hay existencias</label>
              <label v-else style="color: red;">No hay existencias</label>
              <br><br>
              <div class="amountContainerMobile" style="float: left;">            
                <v-icon size="20" class="deleteProductIconMobile" style="margin-left:0px; margin-right: 7px; margin-top: 5px; margin-bottom: 5px;">mdi-minus</v-icon>
                <label class="cartPayLabelMobile" style="margin-left:0px; margin-right: 0px; margin-top: 5px; margin-bottom: 5px;">{{productAmount}}</label>
                <v-icon size="20" class="deleteProductIconMobile" style="margin-left:5px; margin-right: 3px; margin-top: 5px; margin-bottom: 5px;">mdi-plus</v-icon>
              </div>
              <v-btn color="primary" elevation="2" style="left: 30px; top: -2px;">Añadir al carrito</v-btn>
              <br><br>
              <v-divider></v-divider>
              <br>
            </div>
            <p>SKU: {{SKU}}</p>
            <p>Categoría: {{productCategory}}</p>
          </div>
          <div v-else>
            <label>Disponibilidad: </label>
            <label v-if="availableProductAmount>0" style="color: green;">Hay existencias</label>
            <label v-else style="color: red;">No hay existencias</label>
            <br><br>
            <v-divider></v-divider>
            <br>
            <v-btn color="primary" elevation="2">Añadir al carrito</v-btn>
            <br><br>
            <v-divider></v-divider>
            <br>
            <p>SKU: {{SKU}}</p>
            <p>Categoría: {{productCategory}}</p>
          </div> 

          <br>
          <v-divider></v-divider>
          <br>
          <v-tabs v-model="tab">
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab>
              Valoraciones ({{ratings.length}})
            </v-tab>
            <v-tab>
              Características
            </v-tab>
          </v-tabs>
          
          <br><br>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <div v-if="ratings.length==0">
                  <p style="white-space: pre-line;">{{noRatings}}</p>
                </div>
                <div v-else>
                  <template v-for="rating in ratings">
                    <div :key="rating" style="border: 1px solid rgb(224, 224, 224);">
                      <p style="font-size:large; font-weight: bold; margin-left: 20px; margin-right: 20px; margin-top: 20px; ">{{rating.username}}</p>
                      <p style="white-space: pre-line; margin-left: 20px; margin-right: 20px;">{{rating.comment}}</p>
                      <v-rating background-color="warning" style="margin-left: 10px; margin-bottom: 20px;" readonly color="warning" hover length="5" size="15" v-model="rating.rating"></v-rating>
                    </div>   
                    <br :key="rating"> 
                  </template>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <p style="white-space: pre-line; text-align: justify;">{{extraInfo}}</p>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <br>

          <p style="font-size: x-large; font-weight: bold;">Productos relacionados</p>
          <br>
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct" style="text-align: center;">
            <v-img height="180px" width="180px" style="display: block; margin-left: auto; margin-right: auto;" contain :src="require('../assets/images/productPlaceholder.jpg')" class="categoryProductImageDesktop">
            </v-img>
            <br>
            <p style="color: black; font-weight: bold; font-size: larger">{{relatedProduct.productName}}</p>
            <p style="color: gray; font-size: medium; position: relative; top: -5px;">{{relatedProduct.brandName}}</p>
            <p style="color: gray; font-weight: bold; position: relative; top: -10px; font-size: larger">{{relatedProduct.productPrice}}</p>
            <v-rating background-color="warning" style="top:-22px; position: relative;" readonly color="warning" hover length="5" size="15" v-model="relatedProduct.productRating"></v-rating>
            <br>
          </div>


        </div>
      </div>


      <Footer/>
    </div>
  </div>
</template>


<style>

</style>

<script>
import WhatsappLogo from '../components/WhatsappLogo.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Product",

  components: {
    WhatsappLogo,
    Navbar,
    Footer
  },

  data: () => ({
    /* MODELS */
    cartNotification: false,


    productName: 'Humble Berry Blow Doe Ice 120ML',

    mainInfo: `Acerca de AIMIDI Cube Mini + Ai100W TC Box MOD

AIMIDI es conocido por sus productos de vapeo de alta gama, cada uno diseñado para verse tan bien como funciona. Se dedican a proporcionar a sus clientes solo lo mejor de lo mejor y constantemente renuevan su línea para incluir vapeadores que son mejores que los anteriores. Esta compañía es mejor conocida por sus potentes modificaciones de la serie Curve, que estamos orgullosos de ofrecer. Junto con ellos, también ofrecemos una variedad de otras modificaciones AIMIDI a precios asequibles.

Obtenga un vaporizador que sea tan único y estéticamente agradable como poderoso de usar con este AIMIDI Cube. Llamado así por su apariencia única, el cubo AIMIDI presenta diseños en forma de cubo cortados en su cuerpo rectangular. Un botón de disparo de gran tamaño permite un fácil acceso. Hay dos botones que le permiten cambiar la configuración y una pantalla que le permite ver lo que ha cambiado. El AMIDI Cube funciona con tres baterías 18650 que proporcionan a este vaporizador su inmensa potencia.`,

    extraInfo: `introducción del producto

Parámetros

Tamaño: 97 mm x 47 mm x 32 mm
Potencia variable: 1W – 100W
Chip principal: Ai 100W
Rango de control de temperatura: 200 ° F-600 ° F
Voltaje de entrada: 9.0V-12.6V
Corriente de entrada: 5A-23A
Pantalla: OLED de 0.91 pulgadas
Tipo de bobina TC: Ni / Ti / SS /
Hilo: conexión 510 con resorte
Carga: puerto de carga micro-USB
Batería: 1x 26650/18650 batería (sin celda

AIMIDI Cube Mini + Ai100W TC Box MOD contiene

1 x AIMIDI Mini + Ai100W (con un adaptador 18650)
1 x cable USB
1 x manual de usuario
Embalaje simple Embalaje habitual de fábrica, el embalaje está sujeto a cambios sin previo aviso.`,


    productPrice: '₡16,995.00',
    nicotinLevels: ['Elige una opción','0MG','3MG','6MG'],

    availableProductAmount: 25,
    productAmount: 1,
    SKU: 'HUMBLE-BERRY-BLOW-DOE-ICE',

    productCategory: 'Humble',

    ratings: [
      {
        username: 'Oscar Fernando Araya',
        rating: 5,
        comment: 'Me parece un producto excelente, 100% recomendado'
      },
      {
        username: 'Oscar Fernando Araya',
        rating: 5,
        comment: 'Me parece un producto excelente, 100% recomendado'
      }
    ],

    relatedProducts: [
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Air Factory',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Air Factory',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      },
      {
        productName: 'Nasty Star Gazing 60ML',
        brandName: 'Air Factory',
        productRating: 5,
        productPrice: '₡13,995.00',
        productImage: ''
      }
    ],



    selectedNicotinLevel: 'Elige una opción',
    tab: null,

    noRatings: `No hay valoraciones aún.

Solo los usuarios registrados que hayan comprado este producto pueden hacer una valoración.`

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

  methods: {
    addProductToCart(product){
      this.cartNotification = true;
      console.log(product)
    }
  }

};
</script>
