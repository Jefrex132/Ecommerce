<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar />

      <div v-if="screenSize == 'desktop'">
        <br><br><br><br><br><br><br>
        <div v-if="!loggedIn" class="reminderContainerDesktop" style="z-index:2;">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="expansionPanelHeaderDesktop">
                <div>
                  <v-icon size="25" class="checkoutIconDesktop">mdi-alert-circle</v-icon>
                  <label style="cursor: pointer;">¿Ya Eres Cliente? Haz Clic Aquí Para Acceder</label>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <br>
                  <label>Si ya eres cliente, por favor, rellena tus datos a continuación. Si eres un nuevo cliente, continúa en la sección de facturación.</label>
                  <br><br>
                  <div class="formContainerDesktop">
                    <v-form v-model="valid">
                      <br>
                      <v-text-field outlined v-model="firstname" class="textFieldDesktop" style="width:800px; top: 10px;" label="Nombre de usuario o correo electrónico*" required></v-text-field>
                      <v-text-field outlined v-model="email" class="textFieldDesktop" style="width:800px; top: 10px;" label="Contraseña*" required></v-text-field>
                      <v-checkbox v-model="remindUser" label="Recuérdame" class="remindUserCheckboxDesktop"></v-checkbox>
                      <button class="buttonFormDesktop">Acceder</button>
                      <br><br>
                    </v-form>
                  </div>
                </div>
                <br>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <div v-if="!cupponApplied" class="reminderContainerDesktop" style="z-index:1;">
          <br>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="expansionPanelHeaderDesktop">
                <div>
                  <v-icon size="25" class="checkoutIconDesktop">mdi-alert-circle</v-icon>
                  <label style="cursor: pointer;">¿Tiene Un Cupón? Haga Clic Aquí Para Ingresar Su Código</label>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <br>
                  <label>Si tiene un código de cupón, aplíquelo a continuación.</label>
                  <br><br>
                  <div class="cupponCartContainerDesktop" style="border: 1px solid rgb(224, 224, 224); left: 0px; width: auto;">
                    <v-text-field label="Código de cupón" outlined dense class="cupponInputDesktop"></v-text-field>
                    <v-btn color="primary" elevation="2" class="cupponButtonDesktop">Aplicar cupón</v-btn>
                  </div>
                  <br>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <br>
        </div>
        <div style="display: grid; grid-template-columns: auto auto; width: 1000px; margin: 0 auto;">
          <div style="width: 630px;">
            <label class="cartPayLabelMobile" style="font-weight: bold; font-size: 22px;">Facturación y envío</label>
            <hr style="width: 560px; left: 5px; top:10px; position: relative;">
            <br><br>
            <v-form>
              <v-text-field outlined dense v-model="name" class="textFieldDesktop" style="width:400px; left: 10px;" label="Nombre*" required></v-text-field>
              <v-text-field outlined dense v-model="email" class="textFieldDesktop" style="width:400px; left: 10px;" label="Apellidos*" required></v-text-field>
              <v-select v-model="selectedProvince" :items="provinces" label="Seleccione una provincia*" outlined dense style="width: 400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-if="selectedProvince == 'San José'" :items="sanJoseCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Alajuela'" :items="alajuelaCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Cartago'" :items="cartagoCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Heredia'" :items="herediaCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Guanacaste'" :items="guanacasteCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Puntarenas'" :items="puntarenasCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Limón'" :items="limonCities" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>
              <v-select v-model="selectedCity" v-else :items="[]" label="Seleccione un cantón-distrito*" outlined dense style="width:400px; left: 10px;"></v-select>    
              <v-text-field outlined dense v-model="streetName" class="textFieldDesktop" style="width:400px; left: 10px;" label="Número de la casa y nombre de la calle*" required></v-text-field>
              <v-text-field outlined dense v-model="postalCode" class="textFieldDesktop" style="width:400px; left: 10px;" label="Código postal (opcional)"></v-text-field>
              <v-text-field outlined dense v-model="phone" class="textFieldDesktop" style="width:400px; left: 10px;" label="Teléfono*"></v-text-field>
              <v-text-field outlined dense v-model="email" class="textFieldDesktop" style="width:400px; left: 10px;" label="Correo electrónico*"></v-text-field>
              <v-text-field outlined dense v-model="userName" class="textFieldDesktop" style="width:400px; left: 10px;" label="Nombre de usuario para la cuenta*"></v-text-field>
              <v-text-field outlined dense v-model="password" class="textFieldDesktop" style="width:400px; left: 10px;" label="Contraseña para la cuenta*"></v-text-field>
            </v-form>
            <br>
            <label class="cartPayLabelMobile" style="font-weight: bold; font-size: 22px;">Información adicional</label>
            <hr style="width: 560px; left: 5px; top:10px; position: relative;">
            <br><br>
            <v-form>
              <v-textarea outlined v-model="info" class="textFieldDesktop" style="width:400px; left: 10px;" label="Notas del pedido (opcional)" required></v-textarea>
            </v-form>
          </div>
          <div style="width: 350px; position:relative; left:10px; border: 1px solid rgb(224, 224, 224);">
            <br>
            <label class="cartPayLabelMobile" style="font-weight: bold; font-size: 20px; left: 20px;">Tu pedido</label>
            <br><br>
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Producto</label>
              </div>
              <div style="text-align: right;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Subtotal</label>
              </div>
            </div>
            <hr style="width: 300px; top:10px; position: relative; margin: 0 auto;">
            <br>
            <div style="display: grid; grid-template-columns: auto auto;">
              <template v-for="product in products">
                <div style="text-align: left; width: 160px; margin-left: 30px; margin-top:15px;" :key="product">
                  <label class="cartPayLabelMobile" style="font-size: 15px; margin:0px;">{{product.productName}}</label>
                  <label class="cartPayLabelMobile" style="font-size: 15px; font-weight: bold;">x {{product.productAmount}}</label>
                </div>
                <div style="text-align: right; margin-right: 25px; margin-top:15px;" :key="product">
                  <label class="cartPayLabelMobile" style="font-size: 15px;">{{product.productSubtotal}}</label>
                </div>
              </template>
            </div>
            <br>
            <hr style="width: 300px; top:10px; position: relative; margin: 0 auto;">
            <br>
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Subtotal</label>
              </div>
              <div style="text-align: right;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">{{subtotal}}</label>
              </div>
            </div>
            <hr style="width: 300px; top:10px; position: relative; margin: 0 auto;">
            <br>
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color: gray; font-size: 17px; margin: 30px;">Envío</label>
              </div>
              <div style="text-align: right; margin-right: 30px;">
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
            <hr style="width: 300px; top:10px; position: relative; margin: 0 auto;">
            <br>
            <div style="display: grid; grid-template-columns: auto auto;">
              <div style="text-align: left;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Total</label>
              </div>
              <div style="text-align: right;">
                <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">{{total}}</label>
              </div>
            </div>
            <hr style="width: 300px; top:10px; position: relative; margin: 0 auto;">
            <br><br>
            <input name="paymentInfo" type="radio" id="payByBank" value="1" style="margin-left: 30px; margin-right: 15px; margin-bottom: 20px;">
            <label for="payByBank" class="cartPayRadioDesktop" style="font-size: 17px;">Transferencia o Depósito Bancario</label>
            <br>
            <input name="paymentInfo" type="radio" id="payBySINPE" value="1" style="margin-left: 30px; margin-right: 15px;">
            <label for="payBySINPE" class="cartPayRadioDesktop" style="font-size: 17px;">SINPE Móvil</label>
            <br>
            <p class="cartPayLabelMobile" style="font-size: 15px; margin: 30px; text-align: justify;">Tus datos personales se utilizarán para procesar tu pedido, respaldar tu experiencia en este sitio web y para otros fines descritos en nuestra<a href="/privacy"> Política de Privacidad</a>. Al realizar el pedido, usted acepta nuestros<a href="/terms"> términos y condiciones</a>.</p>
            <v-text-field outlined dense v-model="giftCard" class="textFieldDesktop" style="width: 290px; left: 30px; font-size: 20px;" label="Tarjeta de regalo (opcional)"></v-text-field>
            <div style="display: flex; justify-content: center;">
              <v-btn color="primary" elevation="2" class="payButtonDesktop" style="margin: 0px; width: 250px; height: 80px;" @click="finishOrder">Finalizar compra</v-btn>
            </div>
            <br>
          </div>
        </div>


        <v-dialog v-model="checkoutDialog" width="600" persistent>
          <v-card>
            <br>
            <div style="text-align: center">
              <v-card-text style="color: black; font-size: larger;">
                Gracias. Tu pedido ha sido recibido.
              </v-card-text>
            </div>
            <br>
            <v-card-text style="color: black; font-size: medium;">
              NÚMERO DEL PEDIDO: <strong>{{orderNumber}}</strong>
            </v-card-text>
            <v-card-text style="color: black; font-size: medium;">
              FECHA: <strong>{{orderDate}}</strong>
            </v-card-text>
            <v-card-text style="color: black; font-size: medium;">
              TOTAL: <strong>{{orderTotal}}</strong>
            </v-card-text>
            <v-card-text style="color: black; font-size: medium;">
              MÉTODO DE PAGO: <strong>{{orderPayMethod}}</strong>
            </v-card-text>

            <div v-if="orderPayMethod == 'SINPE Móvil'">
              <br>
              <v-card-text style="color: black; font-size: medium;">
                Ahora podés realizar tu pago a nuestro SINPE Móvil.
              </v-card-text>
              <v-card-text style="color: black; font-size: medium; white-space: pre-line;">
                {{sinpePayInfo}}
              </v-card-text>
            </div>
            
            <v-card-actions style="display: flex; justify-content: center;">
              <v-btn color="primary" @click="checkoutDialog = false">Aceptar</v-btn>
            </v-card-actions>
            <br>
          </v-card>
        </v-dialog>


      </div>

      <div v-else>
        <br><br><br>
        <div v-if="!loggedIn" class="reminderContainerDesktop" style="z-index:2; width: 90vw;">
          <br>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="expansionPanelHeaderDesktop">
                <div>
                  <v-icon size="25" class="checkoutIconDesktop">mdi-alert-circle</v-icon>
                  <label style="cursor: pointer;">¿Ya Eres Cliente? Haz Clic Aquí Para Acceder</label>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div style="text-align: justify;">
                  <br>
                  <p>Si ya eres cliente, por favor, rellena tus datos a continuación. Si eres un nuevo cliente, continúa en la sección de facturación.</p>
                  <div class="formContainerDesktop">
                    <v-form v-model="valid">
                      <br>
                      <v-text-field outlined dense v-model="firstname" class="textFieldDesktop" style="margin: 0 auto; left:0px; width:60vw;" label="Nombre de usuario o correo electrónico*" required></v-text-field>
                      <v-text-field outlined dense v-model="email" class="textFieldDesktop" style="margin: 0 auto; left:0px; width:60vw;" label="Contraseña*" required></v-text-field>
                      <v-checkbox v-model="remindUser" label="Recuérdame" class="remindUserCheckboxDesktop" style="margin: 0 auto; left: 0px; width: 60vw;"></v-checkbox>
                      <div style="display: flex; justify-content: center;">
                        <button class="buttonFormDesktop" style="left:0px; width: 50vw;">Acceder</button>
                      </div>
                      <br>
                    </v-form>
                  </div>
                </div>
                <br>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <div v-if="!cupponApplied" class="reminderContainerDesktop" style="z-index:1; width: 90vw;">
          <br>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="expansionPanelHeaderDesktop">
                <div>
                  <v-icon size="25" class="checkoutIconDesktop">mdi-alert-circle</v-icon>
                  <label style="cursor: pointer;">¿Tiene Un Cupón? Haga Clic Aquí Para Ingresar Su Código</label>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <br>
                  <p>Si tiene un código de cupón, aplíquelo a continuación.</p>
                  <div style="border: 1px solid rgb(224, 224, 224); left: 0px; width: auto; height: auto;">
                    <br>
                    <v-text-field label="Código de cupón" outlined dense class="cupponInputDesktop" style="left:0px; width: 60vw; margin: 0 auto; top: 0px;"></v-text-field>
                    <div style="display: flex; justify-content: center;">
                      <v-btn color="primary" elevation="2" class="cupponButtonDesktop" style="left:0px; width: 40vw; top: 0px;">Aplicar</v-btn>
                    </div>
                    <br>
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <br>
        </div>

        <div style="width: 90vw; margin: 0 auto;">
          <br>
          <label class="cartPayLabelMobile" style="font-weight: bold; font-size: 22px;">Facturación y envío</label>
          <hr style="width: 90vw; top:10px; margin: 0 auto; position: relative;">
          <br><br>
          <v-form>
            <v-text-field outlined dense v-model="name" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Nombre*" required></v-text-field>
            <v-text-field outlined dense v-model="email" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Apellidos*" required></v-text-field>
            <v-select v-model="selectedProvince" :items="provinces" label="Seleccione una provincia*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-if="selectedProvince == 'San José'" :items="sanJoseCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Alajuela'" :items="alajuelaCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Cartago'" :items="cartagoCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Heredia'" :items="herediaCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Guanacaste'" :items="guanacasteCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Puntarenas'" :items="puntarenasCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else-if="selectedProvince == 'Limón'" :items="limonCities" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>
            <v-select v-model="selectedCity" v-else :items="[]" label="Seleccione un cantón-distrito*" outlined dense style="width:90vw; left: 0px;"></v-select>    
            <v-text-field outlined dense v-model="streetName" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Número de la casa y nombre de la calle*" required></v-text-field>
            <v-text-field outlined dense v-model="postalCode" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Código postal (opcional)"></v-text-field>
            <v-text-field outlined dense v-model="phone" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Teléfono*"></v-text-field>
            <v-text-field outlined dense v-model="email" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Correo electrónico*"></v-text-field>
            <v-text-field outlined dense v-model="userName" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Nombre de usuario para la cuenta*"></v-text-field>
            <v-text-field outlined dense v-model="password" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Contraseña para la cuenta*"></v-text-field>
          </v-form>
          <br>
          <label class="cartPayLabelMobile" style="font-weight: bold; font-size: 22px;">Información adicional</label>
          <hr style="width: 90vw; top:10px; margin: 0 auto; position: relative;">
          <br><br>
          <v-form>
            <v-textarea outlined v-model="info" class="textFieldDesktop" style="width:90vw; left: 0px;" label="Notas del pedido (opcional)" required></v-textarea>
          </v-form>
        </div>



        <div style="width: 90vw; position: relative; border: 1px solid rgb(224, 224, 224); margin: 0 auto;">
          <br>
          <label class="cartPayLabelMobile" style="font-weight: bold; font-size: 20px; left: 20px;">Tu pedido</label>
          <br><br>
          <div style="display: grid; grid-template-columns: auto auto;">
            <div style="text-align: left;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Producto</label>
            </div>
            <div style="text-align: right;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Subtotal</label>
            </div>
          </div>
          <hr style="width: 80vw; top:10px; position: relative; margin: 0 auto;">
          <br>
          <div style="display: grid; grid-template-columns: auto auto;">
            <template v-for="product in products">
              <div style="text-align: left; width: 45vw; margin-left: 30px; margin-top:15px;" :key="product">
                <label class="cartPayLabelMobile" style="font-size: 15px; margin:0px;">{{product.productName}}</label>
                <label class="cartPayLabelMobile" style="font-size: 15px; font-weight: bold;">x {{product.productAmount}}</label>
              </div>
              <div style="text-align: right; margin-right: 25px; margin-top:15px;" :key="product">
                <label class="cartPayLabelMobile" style="font-size: 15px;">{{product.productSubtotal}}</label>
              </div>
            </template>
          </div>
          <br>
          <hr style="width: 80vw; top:10px; position: relative; margin: 0 auto;">
          <br>
          <div style="display: grid; grid-template-columns: auto auto;">
            <div style="text-align: left;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Subtotal</label>
            </div>
            <div style="text-align: right;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">{{subtotal}}</label>
            </div>
          </div>
          <hr style="width: 80vw; top:10px; position: relative; margin: 0 auto;">
          <br>
          <div style="display: grid; grid-template-columns: auto auto;">
            <div style="text-align: left;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color: gray; font-size: 17px; margin: 30px;">Envío</label>
            </div>
            <div style="text-align: right; margin-right: 30px;">
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
          <hr style="width: 80vw; top:10px; position: relative; margin: 0 auto;">
          <br>
          <div style="display: grid; grid-template-columns: auto auto;">
            <div style="text-align: left;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">Total</label>
            </div>
            <div style="text-align: right;">
              <label class="cartPayLabelMobile" style="font-weight: bold; color:gray; font-size: 17px; margin: 30px;">{{total}}</label>
            </div>
          </div>
          <hr style="width: 80vw; top:10px; position: relative; margin: 0 auto;">
          <br><br>
          <input name="paymentInfo" type="radio" id="payByBank" value="1" style="margin-left: 30px; margin-right: 15px; margin-bottom: 20px;">
          <label for="payByBank" class="cartPayRadioDesktop" style="font-size: 17px;">Transferencia o Depósito Bancario</label>
          <br>
          <input name="paymentInfo" type="radio" id="payBySINPE" value="1" style="margin-left: 30px; margin-right: 15px;">
          <label for="payBySINPE" class="cartPayRadioDesktop" style="font-size: 17px;">SINPE Móvil</label>
          <br>
          <p class="cartPayLabelMobile" style="font-size: 15px; margin: 30px; text-align: justify;">Tus datos personales se utilizarán para procesar tu pedido, respaldar tu experiencia en este sitio web y para otros fines descritos en nuestra<a href="/privacy"> Política de Privacidad</a>. Al realizar el pedido, usted acepta nuestros<a href="/terms"> términos y condiciones</a>.</p>
          <v-text-field outlined dense v-model="giftCard" class="textFieldDesktop" style="width: 70vw; margin: 0 auto; left: 0px; font-size: 20px;" label="Tarjeta de regalo (opcional)"></v-text-field>
          <div style="display: flex; justify-content: center;">
            <v-btn color="primary" elevation="2" class="payButtonDesktop" style="margin: 0px; width: 60vw; height: 80px;" @click="finishOrder">Finalizar compra</v-btn>
          </div>
          <br>
        </div>
      </div>


      <!-- FACTURA -->
      <div id="bill" style="display: none;">
        
        <div style="margin: 0 auto; text-align: center;">
          <br>
          <label style="font-size: medium; font-weight: bold;">Jars</label>
          <br>
          <label style="font-size: medium;">Jeffry Sequeira Araya</label>
          <br>
          <label style="font-size: medium;">Condominio La Rueda, Costa Rica</label>
          <br>
          <v-icon size="20" color="black" style="margin-right: 5px;">mdi-phone</v-icon>
          <label style="font-size: medium;">207020252</label>
          <br>
          <v-icon size="20" color="black" style="margin-right: 5px;">mdi-phone</v-icon>
          <label style="font-size: medium;">86828012</label>
          <br>
          <label style="font-size: medium;">jeff@noah.cr</label>
          <br><br>
          <v-divider color="black"></v-divider>
          <br>
        </div>
        <div style="margin: 0 auto;">
          <label style="font-size: medium;">Fecha: fecha de prueba</label>
          <br>
          <label style="font-size: medium;">Fact Interno: numero de prueba</label>
          <br>
          <label style="font-size: medium;">No Factura: numero de prueba</label>
          <br><br>
          <v-divider color="black"></v-divider>
          <br>
          <div style="display: grid; grid-template-columns: auto auto auto;">
            <label style="font-size: medium; font-weight: bold; margin-right: 20px;">Cant</label>
            <label style="font-size: medium; font-weight: bold">Nombre</label>
            <label style="font-size: medium; font-weight: bold">Precio</label>
            <label style="font-size: medium;">5</label>
            <label style="font-size: medium;">Producto de prueba</label>
            <label style="font-size: medium;">Precio de prueba</label>
            <label style="font-size: medium;">5</label>
            <label style="font-size: medium;">Producto de prueba</label>
            <label style="font-size: medium;">Precio de prueba</label>
          </div>
          <br><br>
          <v-divider color="black"></v-divider>
          <br>
        </div>

        <div style="margin: 0 auto;text-align: center;">
          <label style="font-size: medium;">Sub Total: subtotal de prueba</label> 
          <br>
          <label style="font-size: medium;">Iva%: iva de prueba</label> 
          <br>
          <label style="font-size: medium;">Total: total de prueba</label> 
          <br><br>
          <v-divider color="black"></v-divider>
          <br>
          <label style="font-size: medium;">¡GRACIAS POR SU COMPRA!</label> 
          <br>
          <label style="font-size: medium;">www.noah.cr</label> 
          <br>
          <label style="font-size: medium;">Autorizado mediante Resolucion DGT-R-044-2019 del 06-20-2019</label> 
        </div>
        
      </div>
      <!-- FACTURA -->

      <br><br>
      <Footer/>
    </div>
  </div>
</template>

<style>
.reminderContainerDesktop{
  position: relative;
  width: 1000px;
  margin: 0 auto;
}



.expansionPanelHeaderDesktop{
  background-color: rgb(209, 236, 241) !important;
}

.checkoutIconDesktop{
  color: rgb(0, 132, 214) !important;
  margin-right: 15px;
  position: relative;
}


</style>


<script>
import Navbar from "../components/Navbar.vue";
import WhatsappLogo from "../components/WhatsappLogo.vue";
import Footer from "../components/Footer.vue"

export default {
  name: "Checkout",

  components: {
    Navbar,
    WhatsappLogo,
    Footer
    },

  data: () => ({
    /* MODELS */
    checkoutDialog: false,
    sinpePayInfo: 'BAC CREDOMATIC COLONES\nArafat Bassam Jabara Jebara\nCédula jurídica: 3-101-784144\nCuenta IBAN: CR26010200009434382917',

    orderNumber: 23772,
    orderDate: '08 enero, 2022',
    orderEmail: 'testEmail@gmail.com',
    orderTotal: '₡18,000.00',
    orderPayMethod: 'SINPE Móvil',

    loggedIn: false,
    cupponApplied: false,

    provinces: ['San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'],
    sanJoseCities: ['San José, Carmen', 'San José, Merced', 'San José, Hospital', 'San José, Catedral', 'San José, Zapote', 'San José, San Francisco de Dos Ríos', 'San José, Uruca', 'San José, Mata Redonda', 'San José, Pavas', 'San José, Hatillo', 'San José, San Sebastián', 
    'Escazú, San Antonio', 'Escazú, San Rafael', 
    'Desamparados, Desamparados', 'Desamparados, San Miguel', 'Desamparados, San Juan de Dios', 'Desamparados, San Rafael Arriba', 'Desamparados, San Antonio', 'Desamparados, Frailes', 'Desamparados, Patarra', 'Desamparados, San Cristobal', 'Desamparados, Rosario', 'Desamparados, Damas', 'Desamparados, San Rafael Abajo', 'Desamparados, Gravilias', 'Desamparados, Los Guido', 
    'Puriscal, Santiago', 'Puriscal, Mercedes Sur', 'Puriscal, Barbacoas', 'Puriscal, Grifo Alto', 'Puriscal, San Rafael', 'Puriscal, Candelaria', 'Puriscal, Desamparaditos', 'Puriscal, San Antonio', 'Puriscal, Chires',
    'Tarrazu, San Marcos', 'Tarrazu, San Lorenzo', 'Tarrazu, San Carlos',
    'Aserrí, Aserrí', 'Aserrí, Tarbaca', 'Aserrí, Vuelta de Jorco', 'Aserrí, San Gabriel', 'Aserrí, Legua', 'Aserrí, Monterrey', 'Aserrí, Salitrillos',
    'Mora, Colón', 'Mora, Guayabo', 'Mora, Tabarcia', 'Mora, Piedras Negras', 'Mora, Picagres',
    'Goicoechea, Guadalupe', 'Goicoechea, San Francisco', 'Goicoechea, Calle Blancos', 'Goicoechea, Mata de Plátano', 'Goicoechea, Ipís', 'Goicoechea, Rancho Redondo', 'Goicoechea, Purral',
    'Santa Ana, Santa Ana', 'Santa Ana, Salitral', 'Santa Ana, Pozos', 'Santa Ana, Uruca', 'Santa Ana, Piedades', 'Santa Ana, Brasil',
    'Alajuelita, Alajuelita', 'Alajuelita, San Josecito', 'Alajuelita, San Antonio', 'Alajuelita, Concepción', 'Alajuelita, San Felipe',
    'Vazquez de Coronado, San Isidro', 'Vazquez de Coronado, San Rafael', 'Vazquez de Coronado, Dulce Nombre de Jesús', 'Vazquez de Coronado, Patalillo', 'Vazquez de Coronado, Cascajal',
    'Acosta, San Ignacio de Acosta', 'Acosta, Guaitil', 'Acosta, Palmichal', 'Acosta, Cangrejal', 'Acosta, Sabanillas',
    'Tibás, San Juan', 'Tibás, Cinco Esquinas', 'Tibás, Anselmo Llorente', 'Tibás, Leon XIII', 'Tibás, Colima',
    'Moravia, San Vicente', 'Moravia, San Jerónimo', 'Moravia, Trinidad',
    'Montes de Oca, San Pedro', 'Montes de Oca, Sabanilla', 'Montes de Oca, Mercedes', 'Montes de Oca, San Rafael',
    'Turrubares, San Pablo', 'Turrubares, San Pedro', 'Turrubares, San Juan de Mata', 'Turrubares, San Luis', 'Turrubares, Carara',
    'Dota, Santa María', 'Dota, Jardín', 'Dota, Copey', 
    'Curridabat, Curridabat', 'Curridabat, Granadilla', 'Curridabat, Sánchez', 'Curridabat, Tirrases',
    'Pérez Zeledón, San Isidro del General', 'Pérez Zeledón, Daniel Flores', 'Pérez Zeledón, Rivas', 'Pérez Zeledón, San Pedro', 'Pérez Zeledón, Platanares', 'Pérez Zeledón, Pejibaye', 'Pérez Zeledón, Cajón', 'Pérez Zeledón, Barú', 'Pérez Zeledón, Río Nuevo', 'Pérez Zeledón, Páramo',
    'León Cortes, San Pablo', 'León Cortes, San Andrés', 'León Cortes, Llano Bonito', 'León Cortes, San Isidro', 'León Cortes, Santa Cruz', 'León Cortes, San Antonio'],

    alajuelaCities: ['Alajuela, Alajuela', 'Alajuela, San José', 'Alajuela, Carrizal', 'Alajuela, San Antonio', 'Alajuela, Guácima', 'Alajuela, San Isidro', 'Alajuela, Sabanilla', 'Alajuela, San Rafael', 'Alajuela, Río Segundo', 'Alajuela, Desamparados', 'Alajuela, Turrúcares', 'Alajuela, Tambor', 'Alajuela, Garita', 'Alajuela, Sarapiquí',
    'San Ramón, San Ramón', 'San Ramón, Santiago', 'San Ramón, San Juan', 'San Ramón, Piedades Norte', 'San Ramón, Piedades Sur', 'San Ramón, San Rafael', 'San Ramón, San Isidro', 'San Ramón, Ángeles', 'San Ramón, Alfaro', 'San Ramón, Volio', 'San Ramón, Concepción', 'San Ramón, Zapotal', 'San Ramón, Peñas Blancas',
    'Grecia, Grecia', 'Grecia, San Isidro', 'Grecia, San José', 'Grecia, San Roque', 'Grecia, Tacares', 'Grecia, Río Cuarto', 'Grecia, Puente de Piedra', 'Grecia, Bolivar',
    'San Mateo, San Mateo', 'San Mateo, Desmonte', 'San Mateo, Jesús María', 
    'Atenas, Atenas', 'Atenas, Jesús', 'Atenas, Mercedes', 'Atenas, San Isidro', 'Atenas, Concepción', 'Atenas, San José', 'Atenas, Santa Eulalia', 'Atenas, Escobal',
    'Naranjo, Naranjo', 'Naranjo, San Miguel', 'Naranjo, San José', 'Naranjo, Cirrí Sur', 'Naranjo, San Jerónimo', 'Naranjo, San Juan', 'Naranjo, Rosario',
    'Palmares, Palmares', 'Palmares, Zaragoza', 'Palmares, Buenas Aires', 'Palmares, Santiago', 'Palmares, Candelaria', 'Palmares, Esquipulas', 'Palmares, Granja', 
    'Poás, San Pedro', 'Poás, San Juan', 'Poás, San Rafael', 'Poás, Carrillos', 'Poás, Sabana Redonda',
    'Orotina, Orotina', 'Orotina, Mastate', 'Orotina, Hacienda Vieja', 'Orotina, Coyolar', 'Orotina, Ceiba',
    'San Carlos, Quesada', 'San Carlos, Florencia', 'San Carlos, Buenavista', 'San Carlos, Aguas Zarcas', 'San Carlos, Venecia', 'San Carlos, Pital', 'San Carlos, Fortuna', 'San Carlos, Tigra', 'San Carlos, Palmera', 'San Carlos, Venado', 'San Carlos, Cutris', 'San Carlos, Monterrey', 'San Carlos, Pocosol',
    'Alfaro Ruíz, Zarcero', 'Alfaro Ruíz, Laguna', 'Alfaro Ruíz, Tapezco', 'Alfaro Ruíz, Guadalupe', 'Alfaro Ruíz, Palmira', 'Alfaro Ruíz, Zapote', 'Alfaro Ruíz, Brisas',
    'Valverde Vega, Sarchi Norte', 'Valverde Vega, Sarchi Sur', 'Valverde Vega, Toro Amarillo', 'Valverde Vega, San Pedro', 'Valverde Vega, Rodríguez',
    'Upala, Upala', 'Upala, Aguas Claras', 'Upala, San José (Pizote)', 'Upala, Bijagua', 'Upala, Delicias', 'Upala, Dos Rios', 'Upala, Yoliyllal',
    'Los Chiles, Los Chiles', 'Los Chiles, Caño Negro', 'Los Chiles, El Amparo', 'Los Chiles, San Jorge',
    'Guatuso, San Rafael', 'Guatuso, Buenavista', 'Guatuso, Cote'],

    cartagoCities: ['Cartago, Oriental', 'Cartago, Occidental', 'Cartago, Carmen', 'Cartago, San Nicolas', 'Cartago, Aguacaliente (San Francisco)', 'Cartago, Guadalupe (Arenilla)', 'Cartago, Corralillo', 'Cartago, Tierra Blanca', 'Cartago, Dulce Nombre', 'Cartago, Llano Grande', 'Cartago, Quebradilla',
    'Paraíso, Paraíso', 'Paraíso, Santiago', 'Paraíso, Orosí', 'Paraíso, Llanos de Santa Lucía', 'La Unión, Tres Ríos', 'La Unión, San Diego', 'La Unión, San Juan', 'La Unión, San Rafael', 'La Unión, Concepcion', 'La Unión, Dulce Nombre', 'La Unión, San Ramón', 'La Unión, Río Azul',
    'Jiménez, Juan Viñas', 'Jiménez, Tucurrique', 'Jiménez, Pejibaye',
    'Turrialba, Turrialba', 'Turrialba, La Suiza', 'Turrialba, Peralta', 'Turrialba, Santa Cruz', 'Turrialba, Santa Teresita', 'Turrialba, Pavones', 'Turrialba, Tuis', 'Turrialba, Tayutic', 'Turrialba, Santa Rosa', 'Turrialba, Tres Equis', 'Turrialba, La Isabel', 'Turrialba, Chirripó',
    'Alvarado, Pacayas', 'Alvarado, Cervantes', 'Alvarado, Capellades',
    'Oreamuno, San Rafael', 'Oreamuno, Cote', 'Oreamuno, Potrero Cerrado', 'Oreamuno, Cipreses', 'Oreamuno, Santa Rosa',
    'El Guarco, Tejar', 'El Guarco, San Isidro', 'El Guarco, Tobosi', 'El Guarco, Patio de Agua'],

    herediaCities: ['Heredia, Heredia', 'Heredia, Mercedes', 'Heredia, San Francisco', 'Heredia, Ulloa', 'Heredia, Varablanca',
    'Barva, San Pedro', 'Barva, San Pablo', 'Barva, San Roque', 'Barva, Santa Lucía', 'Barva, San Jose de la Montaña',
    'Santo Domingo, Santo Domingo', 'Santo Domingo, San Vicente', 'Santo Domingo, San Miguel', 'Santo Domingo, Paracito', 'Santo Domingo, Paracito', 'Santo Domingo, Santo Tomás', 'Santo Domingo, Santa Rosa', 'Santo Domingo, Tures', 'Santo Domingo, Para',
    'Santa Bárbara, Santa Bárbara', 'Santa Bárbara, San Pedro', 'Santa Bárbara, San Juan', 'Santa Bárbara, Jesus', 'Santa Bárbara, Santo Domingo', 'Santa Bárbara, Puraba',
    'San Rafael, San Rafael', 'San Rafael, San Josecito', 'San Rafael, Santiago', 'San Rafael, Los Ángeles', 'San Rafael, Concepción',
    'San Isidro, San Isidro', 'San Isidro, San José', 'San Isidro, Concepción', 'San Isidro, San Francisco',
    'Belén, San Antonio', 'Belén, Ribera', 'Belén, Asunción',
    'San Joaquín de Flores, San Joaquín de Flores', 'San Joaquín de Flores, Barrantes', 'San Joaquín de Flores, Llorente',
    'San Pablo, San Pablo',
    'Sarapiquí, Puerto Viejo', 'Sarapiquí, La Vírgen', 'Sarapiquí, Horquetas', 'Sarapiquí, Llanuras del Gaspar', 'Sarapiquí, Cureña'],

    guanacasteCities: ['Liberia, Liberia', 'Liberia, Cañas Dulces', 'Liberia, Mayorga', 'Liberia, Nacascolo', 'Liberia, Curubande',
    'Nicoya, Nicoya', 'Nicoya, Mansion', 'Nicoya, San Antonio', 'Nicoya, Quebrada Honda', 'Nicoya, Samara', 'Nicoya, Nosara', 'Nicoya, Belén de Nosarita',
    'Santa Cruz, Santa Cruz', 'Santa Cruz, Bolson', 'Santa Cruz, Veintisiete de Abril', 'Santa Cruz, Tempate', 'Santa Cruz, Cartagena', 'Santa Cruz, Cuajiniquil', 'Santa Cruz, Diria', 'Santa Cruz, Cabo Velas', 'Santa Cruz, Tamarindo',
    'Bagaces, Bagaces', 'Bagaces, Fortuna', 'Bagaces, Mogote', 'Bagaces, Río Naranjo',
    'Carrillo, Filadelfia', 'Carrillo, Filadelfia', 'Carrillo, Palmira', 'Carrillo, Sardinal', 'Carrillo, Belén', 
    'Cañas, Cañas', 'Cañas, Palmira', 'Cañas, San Miguel', 'Cañas, Bebedero', 'Cañas, Porozal',
    'Abangares, Juntas', 'Abangares, Sierra', 'Abangares, San Juan', 'Abangares, Colorado', 
    'Tilarán, Tilarán', 'Tilarán, Quebrada Grande', 'Tilarán, Tronadora', 'Tilarán, Santa Rosa', 'Tilarán, Líbano', 'Tilarán, Tierras Morenas', 'Tilarán, Arenal',
    'Nandayure, Carmona', 'Nandayure, Santa Rita', 'Nandayure, Zapotal', 'Nandayure, San Pablo', 'Nandayure, Porvenir', 'Nandayure, Bejuco',
    'La Cruz, La Cruz', 'La Cruz, Santa Cecilia', 'La Cruz, Garita', 'La Cruz, Santa Elena',
    'Hojancha, Hojancha', 'Hojancha, Monte Romo', 'Hojancha, Puerto Carrillo', 'Hojancha, Huacas'],

    puntarenasCities: ['Puntarenas, Puntarenas', 'Puntarenas, Pitahaya', 'Puntarenas, Chomes', 'Puntarenas, Lepanto', 'Puntarenas, Paquera', 'Puntarenas, Manzanillo', 'Puntarenas, Guacimal', 'Puntarenas, Barranca', 'Puntarenas, Monte Verde', 'Puntarenas, Isla del Coco', 'Puntarenas, Cobano', 'Puntarenas, Chacarita', 'Puntarenas, Chira', 'Puntarenas, Acapulco', 'Puntarenas, El Roble', 'Puntarenas, Arancibia',
    'Esparza, Espíritu Santo', 'Esparza, San Juan Grande', 'Esparza, Maracona', 'Esparza, San Rafael', 'Esparza, San Jerónimo', 'Buenos Aires, Buenos Aires', 'Buenos Aires, Volcán', 'Buenos Aires, Potrero Grande', 'Buenos Aires, Boruca', 'Buenos Aires, Pilas', 'Buenos Aires, Colinas', 'Buenos Aires, Changena', 'Buenos Aires, Briolley', 'Buenos Aires, Brunka',
    'Montes de Oro, Miramar', 'Montes de Oro, Unión', 'Montes de Oro, San Isidro', 'Osa, Puerto Cortés', 'Osa, Palmar', 'Osa, Sierpe', 'Osa, Bahía Ballena', 'Osa, Piedras Blancas',
    'Aguirre, Quepos', 'Aguirre, Savegre', 'Aguirre, Naranjito',
    'Golfito, Golfito', 'Golfito, Puerto Jiménez', 'Golfito, Guaycara', 'Golfito, Pavón',
    'Coto Brus, San Vito', 'Coto Brus, Sabalito', 'Coto Brus, Aguabuena', 'Coto Brus, Limoncito', 'Coto Brus, Pittier',
    'Parrita, Parrita',
    'Corredores, Corredor', 'Corredores, La Cuesta', 'Corredores, Canoas', 'Corredores, Laurel',
    'Garabito, Jacó', 'Garabito, Tárcoles'],

    limonCities: ['Limón, Limón', 'Limón, Valle La Estrella', 'Limón, Valle La Estrella', 'Limón, Río Blanco', 'Limón, Matama',
    'Pococí, Guapiles', 'Pococí, Jiménez', 'Pococí, Rita', 'Pococí, Roxana', 'Pococí, Cariari', 'Pococí, Colorado',
    'Siquirres, Siquirres', 'Siquirres, Pacuarito', 'Siquirres, Florida', 'Siquirres, Germania', 'Siquirres, Cairo', 'Siquirres, Alegria',
    'Talamanca, Bratsi', 'Talamanca, Sixaola', 'Talamanca, Cahuita', 'Talamanca, Telire', 
    'Matina, Matina', 'Matina, Battan', 'Matina, Carrandi',
    'Guácimo, Guácimo', 'Guácimo, Mercedes', 'Guácimo, Pocora', 'Guácimo, Río Jiménez', 'Guácimo, Duacarí'],

    name: '',
    lastNames: '',
    selectedProvince: '',
    selectedCity: '',
    streetName: '',
    postalCode: '',
    phone: '',
    email: '',
    userName: '',
    password: '',
    info: '',
    giftCard: '',

    products:
    [
      {
        productImage: 'productPlaceholder.jpg',
        productName: 'Wes Coil Alien Clapton 0.12 Dual',
        productPrice: '₡3,000.00',
        productAmount: '3',
        productSubtotal: '₡3,000.00'
      },
      {
        productImage: 'productPlaceholder.jpg',
        productName: 'Wes Coil Alien Clapton 0.12 Dual',
        productPrice: '₡3,000.00',
        productAmount: '3',
        productSubtotal: '₡3,000.00'
      },
      {
        productImage: 'productPlaceholder.jpg',
        productName: 'Wes Coil Alien Clapton 0.12 Dual',
        productPrice: '₡3,000.00',
        productAmount: '3',
        productSubtotal: '₡3,000.00'
      }
    ],

    subtotal: '₡3,000.00',
    total: '₡3,000.00'

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
    finishOrder(){
      var divContents = document.getElementById("bill").innerHTML;
      var a = window.open('', '', 'height=500, width=500');
      a.document.write('<html>');
      a.document.write(divContents);
      a.document.write('</body></html>');
      a.document.close();
      a.print();
    }
  }

};
</script>
