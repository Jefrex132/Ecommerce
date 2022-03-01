<template>
  <div v-if="screenSize == 'desktop'">
    <div v-if="emptyProductList">
      <br><br>
      <div class="emptyCartContainerDesktop">
        <v-icon size="20" class="emptyCartIconDesktop">mdi-alert-circle</v-icon>
        <label class="emptyCartLabelDesktop">Tu carrito está vacío.</label>
      </div>
      <br><br>
    </div>

    <div v-else>
      <br><br>
      <div class="cartTableContainerDesktop">
        
        <v-data-table
          :headers="headers"
          :items="products"
          hide-default-footer
          :items-per-page="10000"
          class="cartTableDesktop">

          <template v-slot:item.actionImage="{ item }">
            <v-img :src="item.productImage" width="100"></v-img>
          </template>
          
          <template class="primary" v-slot:item.productAmount="{ item }"> 
            <v-text-field 
              single-line 
              outlined 
              dense 
              type="number"
              min="1"
              readonly
              prepend-icon="mdi-minus" @click:prepend="reducirCantidadProducto(item)"
              append-outer-icon="mdi-plus" @click:append-outer="aumentarCantidadProducto(item)"
              :value="item.productAmount" 
              v-model="item.productAmount"
              style="position: relative; top: 20%;">
            </v-text-field>
          </template>

        </v-data-table>
        
        <div class="cartIconsContainerDesktop"></div>
        <div class="cupponCartContainerDesktop">
          <v-text-field label="Código de cupón" outlined dense class="cupponInputDesktop"></v-text-field>
          <v-btn color="primary" elevation="2" class="cupponButtonDesktop">Aplicar cupón</v-btn>
        </div>
      </div>
      <div class="cartTableContainerDesktop" style="grid-template-columns: auto auto auto;">
        <div class="cartIconsContainerDesktop"></div>
        <div class="cartIconsContainerDesktop"></div>
        <div>
          <br><br>
          <div class="cartPayContainerDesktop">
            <h1 class="cartTotalLabelDesktop">Total del carrito</h1>
            <hr class="cartPayLineDesktop" noshade >
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <h1 class="cartPayLabelDesktop" style="left: 20px; width: 200px; font-weight: bold;">Subtotal</h1>
              </div>
              <div style="text-align: right;">
                <h1 class="cartPayLabelDesktop">{{subtotal}}</h1>
              </div>
            </div>
            <hr class="cartPayLineDesktop" noshade style="width: 555px; margin: 0 auto; position: relative;">
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <h1 class="cartPayLabelDesktop" style="left: 20px; width: 200px; font-weight: bold;">Total</h1>
              </div>
              <div style="text-align: right; margin: 10px;">
                <div>
                  <div>
                    <input name="sendInfo" type="radio" id="sendByMail" value="0" style="margin: 10px;">
                    <label for="sendByMail" class="cartPayRadioDesktop">Correos de Costa Rica: ₡3,500.00</label>
                  </div> 
                  <div>
                    <input name="sendInfo" type="radio" id="sendFree" value="1" style="margin: 10px;">
                    <label for="sendFree" class="cartPayRadioDesktop">Envío Gratuito</label>
                  </div> 
                  <div>
                    <input name="sendInfo" type="radio" id="pickInStore" value="2" style="margin: 10px;">
                    <label for="pickInStore" class="cartPayRadioDesktop">Retirar en King Vape Plaza Zapote Centro Comercial</label>
                  </div> 
                </div>
              </div>
              
            </div>
            <hr class="cartPayLineDesktop" noshade style="width: 555px; margin: 0 auto; position: relative;">
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <h1 class="cartPayLabelDesktop" style="left: 20px; width: 200px; font-weight: bold;">Total</h1>
              </div>
              <div style="text-align: right;">
                <h1 class="cartPayLabelDesktop">{{total}}</h1>
              </div>
            </div>
            <hr class="cartPayLineDesktop" noshade style="width: 555px; margin: 0 auto; position: relative;">
            <div style="display: flex; justify-content: center;">
              <v-btn color="primary" elevation="2" class="payButtonDesktop" @click="goToCheckout">Finalizar compra</v-btn>
            </div>
          </div>
        </div>
      </div>  
      <br><br>
    </div>
  </div>


  <div v-else>
    <div v-if="emptyProductList">
      <br>
      <div class="emptyCartContainerDesktop" style="width: 90vw;">
        <v-icon size="20" class="emptyCartIconDesktop">mdi-alert-circle</v-icon>
        <label class="emptyCartLabelDesktop">Tu carrito está vacío.</label>
      </div>
      <br><br>
    </div>
    <div v-else class="cartTableContainerMobile"> 
      <template v-for="product in products">
        <br :key="product"/>
        <div :key="product" class="cartProductContainerMobile">
          <div style="text-align: right;">
            <v-icon size="20" class="deleteProductIconMobile">mdi-delete</v-icon>
          </div>
          <hr>
          <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
            <div style="text-align: left; margin:10px;">
              <label class="cartPayLabelMobile" style="font-weight: bold;">Producto:</label>
            </div>
            <div style="text-align: right; margin:10px;">
              <label class="cartPayLabelMobile productNameLabelMobile" style="width: 80vw; margin: 0px;">{{product.productName}}</label>
            </div>
          </div>
          <hr>
          <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
            <div style="text-align: left; margin:10px;">
              <label class="cartPayLabelMobile" style="font-weight: bold;">Precio:</label>
            </div>
            <div style="text-align: right; margin:10px;">
              <label class="cartPayLabelMobile" style="width: 80vw; margin: 0px;">₡{{product.productPrice}}</label>
            </div>
          </div>
          <hr>
          <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
            <div style="text-align: left; margin:10px;">
              <label class="cartPayLabelMobile" style="font-weight: bold;">Cantidad:</label>
            </div>
            <div style="text-align: right; margin: 10px;">
              <div class="amountContainerMobile">            
                <v-icon size="20" class="deleteProductIconMobile" style="margin-left:0px; margin-right: 7px; margin-top: 5px; margin-bottom: 5px;">mdi-minus</v-icon>
                <label class="cartPayLabelMobile" style="margin-left:0px; margin-right: 0px; margin-top: 5px; margin-bottom: 5px;">{{product.productAmount}}</label>
                <v-icon size="20" class="deleteProductIconMobile" style="margin-left:5px; margin-right: 3px; margin-top: 5px; margin-bottom: 5px;">mdi-plus</v-icon>
              </div>
            </div>
          </div>
          <hr>
          <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
            <div style="text-align: left; margin: 10px;">
              <label class="cartPayLabelMobile" style="font-weight: bold;">Subtotal:</label>
            </div>
            <div style="text-align: right; margin: 10px;">
              <label class="cartPayLabelMobile" style="font-weight: bold;">₡{{product.productSubtotal}}</label>
            </div>
          </div>
        </div>
      </template>

      <br>
      <div class="cupponCartContainerMobile">
        <div style="float:left; margin: 10px;">
          <v-text-field label="Código de cupón" outlined dense class="cupponInputMobile"></v-text-field>
        </div>
        <div style="float:right; margin: 0px;">
          <v-icon size="20" class="deleteProductIconMobile">mdi-check</v-icon>
        </div>
      </div>

      <br>
      <div class="cartPayContainerMobile">
        <br>
        <label class="cartPayLabelMobile" style="font-weight: bold; margin: 20px; font-size: 18px;">Total del carrito:</label>
        <br><br>
        <hr>
        <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
          <div style="text-align: left; margin: 10px;">
            <label class="cartPayLabelMobile" style="font-weight: bold;">Subtotal:</label>
          </div>
          <div style="text-align: right; margin: 10px;">
            <label class="cartPayLabelMobile">{{subtotal}}</label>
          </div>
        </div>
        <hr style="width: 80vw; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
          <div style="text-align: left; margin: 10px;">
            <label class="cartPayLabelMobile" style="font-weight: bold;">Envío:</label>
          </div>
          <div style="text-align: right; margin: 10px;">
            <div>
              <div>
                <input name="sendInfo" type="radio" id="sendByMail" value="0" style="margin: 10px;">
                <label for="sendByMail" class="cartPayRadioDesktop">Correos de Costa Rica: ₡3,500.00</label>
              </div> 
              <div>
                <input name="sendInfo" type="radio" id="sendFree" value="1" style="margin: 10px;">
                <label for="sendFree" class="cartPayRadioDesktop">Envío Gratuito</label>
              </div> 
              <div>
                <input name="sendInfo" type="radio" id="pickInStore" value="2" style="margin: 10px;">
                <label for="pickInStore" class="cartPayRadioDesktop">Retirar en King Vape Plaza Zapote Centro Comercial</label>
              </div> 
            </div>
          </div>
        </div>

        <hr style="width: 80vw; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: auto auto; width: 90vw">
          <div style="text-align: left; margin: 10px;">
            <label class="cartPayLabelMobile" style="font-weight: bold;">Total:</label>
          </div>
          <div style="text-align: right; margin: 10px;">
            <label class="cartPayLabelMobile">{{total}}</label>
          </div>
        </div>

        <hr style="width: 80vw; margin: 0 auto;">
        <div style="text-align: center;">
          <v-btn color="primary" elevation="2" class="payButtonDesktop" style="width: 70vw;" @click="goToCheckout">Finalizar compra</v-btn>
        </div>
      </div>
      <br>
    </div>
  </div>

</template>

<style>
/* MOBILE VIEW */
.cupponInputMobile{
  width: 60vw;
}

.cupponCartContainerMobile{
  height: 65px;
  width: 90vw;
  margin: 0 auto;
  border: 1px solid rgb(224, 224, 224);
}

.cartPayContainerMobile{
  position: relative;
  margin: 0 auto;
  width: 90vw;
  border: 1px solid rgb(224, 224, 224);
}

.amountContainerMobile{
  border: 1px solid rgb(224, 224, 224);
  float: right;
}

.cartTableContainerMobile{
  width: 90vw;
  margin: 0 auto;
}

.cartProductContainerMobile{
  position: relative;
  border: 1px solid rgb(224, 224, 224);
}

.deleteProductIconMobile{
  color: rgb(122, 122, 122) !important;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 15px;
  position: relative;
}

.deleteProductIconMobile:active{
  transform: scale(0.7);
  color: rgb(0, 132, 214) !important;
}

.cartPayLabelMobile{
  position: relative;
  font-size: 14px;
  margin: 5px;
  font-weight: normal;
}

.productNameLabelMobile{
  color: rgb(0, 132, 214) 
}

/* DESKTOP VIEW */
.cartPayRadioDesktop{
  position: relative;
  font-size: 15px;
}

.cartPayLineDesktop{
  color: rgb(209, 209, 209);
  background-color: rgb(209, 209, 209);
  height: 1px;
  border: none;
}

.cartTotalLabelDesktop{
  position: relative;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
}

.cartPayLabelDesktop{
  position: relative;
  font-size: 15px;
  margin: 10px;
  font-weight: normal;
}

.cartPayContainerDesktop{
  position: relative;
  width: 580px;
  left: 130px;
  border: 1px solid rgb(224, 224, 224);
}

.cupponCartContainerDesktop{
  position: relative;
  border-left: 1px solid rgb(224, 224, 224);
  border-right: 1px solid rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 800px;
  height: 60px;
  left: 10px;
  display: grid; 
  grid-template-columns: auto auto; 
}

.cupponButtonDesktop{
  top: 10px;
  width: 200px;
  left: 40%;
}

.payButtonDesktop{
  margin: 20px;
  width: 500px;
}

.cupponInputDesktop{
  width: 300px;
  top: 10px;
  left: 10px;
}

.emptyCartContainerDesktop{
  position: relative;
  width: 1000px;
  background-color: rgb(219, 219, 219);
  margin: 0 auto;
  border-top: 2px solid rgb(0, 132, 214);
}

.cartTableContainerDesktop{
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.cartIconsContainerDesktop{
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: 0 auto;
  position: relative;
  justify-content: center;
}

.emptyCartLabelDesktop{
  position: relative;
}

.emptyCartIconDesktop{
  color: rgb(0, 132, 214) !important;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.cartIconDesktop{
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
}

.cartTableDesktop{
  width: 800px;
  margin: 0 auto;
  border: 1px solid rgb(224, 224, 224);
}


tr{
  height: 50px !important;
}
</style>

<script>
import router from '../router/index';

export default {
  name: "CartTable",
  components: {},

  data: () => ({
    headers: [
      {
        text: 'Imagen',
        align: 'start',
        sortable: false,
        value: 'actionImage'
      },
      {
        text: 'Producto',
        align: 'start',
        sortable: false,
        value: 'productName',
      },
      {
        text: 'Precio',
        align: 'start',
        sortable: false,
        value: 'productPrice'
      },
      {
        text: 'Cantidad',
        align: 'start',
        sortable: false,
        value: 'productAmount'
      },
      {
        text: 'Subtotal',
        align: 'start',
        sortable: false,
        value: 'productSubtotal'
      }
    ],
   
    products: [],

    subtotal: 0,
    total: 0,

    clientID: 156
  }),

  methods: {
    goToCheckout(){
      router.push('/checkout');
    },

    reducirCantidadProducto(product){
      if (product.productAmount > 1){
        product.productAmount = product.productAmount-1;
        product.productSubtotal = product.productAmount*product.productPrice
      }
    },

    aumentarCantidadProducto(product){
      product.productAmount = product.productAmount+1;
      product.productSubtotal = product.productAmount*product.productPrice
      
    },

  },

  created(){
    const url = 'http://pruebas.noah.cr/Backend/api/Carritos/ObtenerProductos/King%20Vape/' + this.clientID
    this.$http.get(url).then((result) => {
      for(var product in result.data){
        this.products.push({ 
          productID:result.data[product].id,
          productName:result.data[product].nombre, 
          productPrice:result.data[product].precioVenta, 
          productAmount:result.data[product].cantidad,
          productImage:result.data[product].foto,
          productSubtotal:(result.data[product].cantidad*result.data[product].precioVenta)
          })
      }
    })

    console.log(this.products)
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

    emptyProductList(){
      return this.products.length == 0;
    }
  },
};

</script>
