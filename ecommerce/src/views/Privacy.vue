<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar/>
      <br><br><br><br><br><br><br><br>
      <div class="privacyLabelContainer" style="text-align: center;" :key="paragraph">
        <h1 class="privacyLabel">Política de Privacidad</h1>
      </div>
      <br>
      <template v-for="paragraph in paragraphs">
        <br :key="paragraph">
        <div class="privacyLabelContainer" :key="paragraph">
          <p class="privacyLabel">{{paragraph.content}}</p>
        </div>
      </template>
      <br><br><br>
      <Footer/>
    </div>
  </div>
</template>


<style>
.privacyLabelContainer {
  position: relative;
  margin: 0 auto;
  width: 80vw;
  text-align: justify;
}

.privacyLabel {
  position: relative;
}

</style>


<script>
import WhatsappLogo from '../components/WhatsappLogo.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Privacy",

  components: {
    WhatsappLogo,
    Navbar,
    Footer
  },

  data: () => ({
    paragraphs: [
      {content: 'Esta Política de privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita o realiza una compra en King Vape (el “Sitio”).'},
      {content: 'INFORMACIÓN PERSONAL QUE RECOPILAMOS'},
      {content: 'Cuando visita el Sitio, recopilamos automáticamente cierta información sobre su dispositivo, incluida información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que están instaladas en su dispositivo. Además, a medida que navega por el Sitio, recopilamos información sobre las páginas web o productos individuales que ve, qué sitios web o términos de búsqueda lo remitieron al Sitio e información sobre cómo interactúa con el Sitio. Nos referimos a esta información recopilada automáticamente como “Información del dispositivo”.'},
      {content: 'Recopilamos información del dispositivo utilizando las siguientes tecnologías:'},
      {content: '    – Las “cookies” son archivos de datos que se colocan en su dispositivo o computadora y que a menudo incluyen un identificador único anónimo. Para obtener más información sobre las cookies y cómo deshabilitar las, visite http://www.allaboutcookies.org.'},
      {content: '    – Los “archivos de registro” rastrean las acciones que ocurren en el Sitio y recopilan datos, incluyendo su dirección IP, tipo de navegador, proveedor de servicios de Internet, páginas de referencia / salida y marcas de fecha / hora.'},
      {content: '    – Las “balizas web”, las “etiquetas” y los “píxeles” son archivos electrónicos que se utilizan para registrar información sobre cómo navega por el Sitio.'},
      {content: 'Además, cuando realiza una compra o intenta realizar una compra a través del Sitio, recopilamos cierta información de usted, incluido su nombre, dirección de facturación, dirección de envío, información de pago (incluidos los números de tarjeta de crédito), dirección de correo electrónico y número de teléfono. Nos referimos a esta información como “Información de pedido”.'},
      {content: 'Cuando hablamos de “Información personal” en esta Política de privacidad, hablamos tanto de Información del dispositivo como de Información del pedido.'},
      {content: '¿CÓMO USAMOS TU INFORMACIÓN PERSONAL?'},
      {content: 'Usamos la información de pedidos que recopilamos generalmente para cumplir con los pedidos realizados a través del Sitio (incluido el procesamiento de su información de pago, la organización del envío y el suministro de facturas y / o confirmaciones de pedidos). Además, utilizamos esta información de pedido para:'},
      {content: 'Comunicarse contigo;'},
      {content: 'Revise nuestros pedidos de riesgo potencial o fraude; y'},
      {content: 'Cuando esté en línea con las preferencias que ha compartido con nosotros, le proporcionaremos información o publicidad relacionada con nuestros productos o servicios.'},
      {content: 'Utilizamos la información del dispositivo que recopilamos para ayudarnos a detectar posibles riesgos y fraudes (en particular, su dirección IP) y, en general, para mejorar y optimizar nuestro sitio (por ejemplo, generando análisis sobre cómo navegan e interactúan nuestros clientes) el Sitio, y para evaluar el éxito de nuestras campañas de marketing y publicidad).'},
      {content: 'COMPARTIENDO SU INFORMACIÓN PERSONAL'},
      {content: 'Compartimos su información personal con terceros para ayudarnos a usar su información personal, como se describe anteriormente. Por ejemplo, usamos Crossfire.Network para impulsar nuestra tienda en línea. Puede leer más sobre cómo Crossfire.Network utiliza su información personal aquí. También utilizamos Google Analytics para ayudarnos a comprender cómo nuestros clientes usan el Sitio.'},
      {content: 'Finalmente, también podemos compartir su información personal para cumplir con las leyes y regulaciones aplicables, para responder a una citación, una orden de registro u otra solicitud legal de información que recibimos, o para proteger nuestros derechos.'},
      {content: 'NO SEGUIR'},
      {content: 'Tenga en cuenta que no modificamos las prácticas de recopilación y uso de datos de nuestro Sitio cuando vemos una señal de No rastrear desde su navegador.'},
      {content: 'RETENCIÓN DE DATOS'},
      {content: 'Cuando realiza un pedido a través del Sitio, mantendremos su Información de pedido para nuestros registros a menos y hasta que nos solicite que eliminemos esta información.'},
      {content: 'MENORES'},
      {content: 'El sitio no está destinado a personas menores de 18 años.'},
      {content: 'CAMBIOS'},
      {content: 'Podemos actualizar esta política de privacidad de vez en cuando para reflejar, por ejemplo, cambios en nuestras prácticas o por otros motivos operativos, legales o reglamentarios.'},
      {content: 'CONTÁCTENOS'},
      {content: 'Para obtener más información sobre nuestras prácticas de privacidad, si tiene preguntas o si desea presentar una queja, comuníquese con nosotros al correo electrónico ajabara@kingvapecr.com'},
      {content: 'También familiaricese con nuestros Términos de Servicio.'}
    ]
  }),

};
</script>
