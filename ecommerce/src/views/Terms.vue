<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar/>
      <br><br><br><br><br><br><br><br>
      <template v-for="paragraph in paragraphs">
        <div :key="paragraph" v-if="paragraph.type=='text'" class="termsLabelContainer">
          <p class="termsTextLabel">{{paragraph.content}}</p>
        </div>
        <div :key="paragraph" v-else-if="paragraph.type=='title'" class="termsLabelContainer">
          <br>
          <p class="termsTitleLabel">{{paragraph.content}}</p>
        </div>
        <div :key="paragraph" v-else-if="paragraph.type=='subtitle'" class="termsLabelContainer">
          <br>
          <p class="termsSubtitleLabel">{{paragraph.content}}</p>
        </div>
        <div :key="paragraph" v-else class="termsLabelContainer">
          <template v-for="subtext in paragraph.content">
            <p :key="subtext" class="termsTextLabel">{{subtext}}</p>
          </template>
        </div>
      </template>
      <br><br><br>
      <Footer/>
    </div>
  </div>
</template>


<style>
.termsLabelContainer {
  position: relative;
  margin: 0 auto;
  width: 80vw;
  text-align: justify;
}

.termsTextLabel {
  position: relative;
}

.termsTitleLabel {
  position: relative;
  font-weight: bolder;
}

.termsSubtitleLabel{
  position: relative;
  font-weight: bold;
}


@font-face {
  font-family: titleFont;
  src: url("../assets/fonts/ethnocentric.ttf");
}
</style>


<script>
import WhatsappLogo from '../components/WhatsappLogo.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Terms",

  components: {
    WhatsappLogo,
    Navbar,
    Footer
  },

  data: () => ({
    paragraphs: [
      {type: 'text', content: 'VISIÓN DE CONJUNTO'},
      {type: 'text', content: 'Este sitio web es operado por King Vape (https://kingvapecr.com). En todo el sitio, los términos “nosotros”, “nos” y “nuestro” se refieren al King Vape. King Vape ofrece este sitio web, que incluye toda la información, herramientas y servicios disponibles en este sitio para usted, el usuario, condicionado a su aceptación de todos los términos, condiciones, políticas y avisos aquí establecidos.'},
      {type: 'text', content: 'Al visitar nuestro sitio y / o comprar algo de nosotros, usted participa en nuestro “Servicio” y acepta estar sujeto a los siguientes términos y condiciones (“Términos de servicio”, “Términos”), incluidos los términos y condiciones y políticas adicionales referenciado aquí y / o disponible por hipervínculo. Estos Términos de servicio se aplican a todos los usuarios del sitio, incluidos, entre otros, los usuarios que son navegadores, proveedores, clientes, comerciantes y / o contribuyentes de contenido.'},
      {type: 'text', content: 'Lea estos Términos de servicio detenidamente antes de acceder o utilizar nuestro sitio web. Al acceder o utilizar cualquier parte del sitio, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con todos los términos y condiciones de este acuerdo, no podrá acceder al sitio web ni utilizar ningún servicio.'},
      {type: 'text', content: 'Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de estos Términos de servicio mediante la publicación de actualizaciones y / o cambios en nuestro sitio web. Es su responsabilidad revisar esta página periódicamente para ver los cambios. Su uso continuo o acceso al sitio web después de la publicación de cualquier cambio constituye la aceptación de dichos cambios.'},
      {type: 'text', content: 'Nuestra tienda está alojada en Crossfire.Network. Nos proporcionan la plataforma de comercio electrónico en línea que nos permite venderle nuestros productos y servicios. También debe familiarizarse con sus términos de servicio.'},
      {type: 'title', content: 'SECCIÓN 1 – TÉRMINOS DE LA TIENDA ONLINE'},
      {type: 'text', content: 'Al aceptar estos Términos de servicio, usted declara que tiene al menos la mayoría de edad en su estado o provincia de residencia, o que tiene la mayoría de edad en su estado o provincia de residencia y nos ha dado su consentimiento para permitir que cualquiera de sus dependientes menores use este sitio.'},
      {type: 'text', content: 'No puede usar nuestros productos para ningún propósito ilegal o no autorizado ni puede, en el uso del Servicio, violar ninguna ley en su jurisdicción (incluidas, entre otras, las leyes de derechos de autor).'},
      {type: 'text', content: 'No debe transmitir gusanos, virus o códigos de naturaleza destructiva.'},
      {type: 'text', content: 'Una violación o violación de cualquiera de los Términos resultará en la terminación inmediata de sus Servicios.'},
      {type: 'title', content: 'SECCIÓN 2 – CONDICIONES GENERALES'},
      {type: 'text', content: 'Nos reservamos el derecho de rechazar el servicio a cualquier persona por cualquier motivo en cualquier momento.'},
      {type: 'text', content: 'Usted comprende que su contenido (sin incluir la información de la tarjeta de crédito) puede transferirse sin cifrar e implicar (a) transmisiones a través de varias redes; y (b) cambios para cumplir y adaptarse a los requisitos técnicos de conexión de redes o dispositivos. La información de la tarjeta de crédito siempre se cifra durante la transferencia a través de redes.'},
      {type: 'text', content: 'Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte del Servicio, el uso del Servicio o el acceso al Servicio o cualquier contacto en el sitio web a través del cual se presta el servicio, sin nuestro permiso expreso por escrito.'},
      {type: 'text', content: 'Los títulos utilizados en este acuerdo se incluyen solo por conveniencia y no limitarán ni afectarán estos Términos.'},
      {type: 'title', content: 'SECCIÓN 3 – MODIFICACIONES AL SERVICIO Y PRECIOS'},
      {type: 'text', content: 'Los precios de nuestros productos están sujetos a cambios sin previo aviso.'},
      {type: 'text', content: 'Nos reservamos el derecho en cualquier momento de modificar o descontinuar el Servicio (o cualquier parte o contenido del mismo) sin previo aviso en cualquier momento.'},
      {type: 'text', content: 'No seremos responsables ante usted o cualquier tercero por cualquier modificación, cambio de precio, suspensión o interrupción del Servicio.'},
      {type: 'title', content: 'SECCIÓN 4 – PRODUCTOS O SERVICIOS'},
      {type: 'text', content: 'Ciertos productos o servicios pueden estar disponibles exclusivamente en línea a través del sitio web. Estos productos o servicios pueden tener cantidades limitadas y están sujetos a devolución o cambio solo de acuerdo con nuestra SECCIÓN 5 – POLÍTICA DE DEVOLUCIONES.'},
      {type: 'text', content: 'Hemos hecho todo lo posible para mostrar con la mayor precisión posible los colores e imágenes de nuestros productos que aparecen en la tienda. No podemos garantizar que la pantalla de cualquier color en el monitor de su computadora sea precisa.'},
      {type: 'text', content: 'Nos reservamos el derecho, pero no estamos obligados, de limitar las ventas de nuestros productos o servicios a cualquier persona, región geográfica o jurisdicción. Podemos ejercer este derecho caso por caso. Nos reservamos el derecho de limitar las cantidades de cualquier producto o servicio que ofrecemos. Todas las descripciones de productos o precios de los productos están sujetas a cambios en cualquier momento sin previo aviso, a nuestro exclusivo criterio. Nos reservamos el derecho de descontinuar cualquier producto en cualquier momento. Cualquier oferta para cualquier producto o servicio realizado en este sitio es nula donde esté prohibida.'},
      {type: 'text', content: 'No garantizamos que la calidad de los productos, servicios, información u otro material comprado u obtenido por usted cumpla con sus expectativas, o que se corrija cualquier error en el Servicio.'},
      {type: 'title', content: 'SECCIÓN 5 – POLÍTICA DE CAMBIOS Y DEVOLUCIONES'},
      {type: 'list', content: [
        'Todas las órdenes de compra tienen 3 días naturales de cortesía a partir del día que se entrega el paquete. Para efectuar el cambio se debe presentar o enviar la factura original de compra respectiva, el producto debe estar en su empaque original o caja . De lo contrario no se aceptarán cambios ni reclamos.',
        'En caso de los dispositivos, si se encuentra con golpes, con humedad, o mal uso, no cubre la garantía.',
        'En cuanto a la garantía por defectos de fábrica se dan 30 días naturales. Se debe presentar la factura original de compra respectiva.',
        'La garantía no cubre desgaste por uso (roce) o que el cliente haya elegido un dispositivo inadecuada y haya forzado el dispositivo.',
        'Un único cambio será realizado; es decir no se realizan cambios posteriores al primer cambio. Éstos cambios estarán sujetos a disponibilidad; se cambiarán únicamente si hay en existencia.',
        'Si no hubiera el producto por la cual se desea cambiar, entonces se dará la oportunidad de cambiar el producto por otro del mismo precio. Si el cliente desea adquirir un producto de mayor precio a la que está devolviendo, puede pagar la diferencia del costo.',
        'Si el producto por el cual se realizará el cambio es de un precio inferior al pagado originalmente, King Vape CR no realizará el reembolso de la diferencia, pero sí se acreditará la diferencia como crédito a favor del cliente en la compra de un nuevo artículo.',
        'El costo del transporte, tanto de devolución como de re-envío de el nuevo producto, correrán por cuenta del cliente, y estos no serán reconocidos o reembolsados por King Vape.',
        'Sin la factura original no se aceptan cambios ni reclamos de garantía.',
        'En caso de E-liquid, no se cambiará el producto si el sello se abrió anteriormente, la única manera de cambio es que el producto tenga algún daño de fabrica.'
      ]},
      {type: 'title', content: 'SECCIÓN 6 – POLÍTICA DE CANCELACIÓN'},
      {type: 'text', content: 'Si el cliente así lo desee puede cancelar su pedido en un tiempo no mayor a una hora de haber realizado la compra. Deberá informarnos de su decisión al correo electrónico ajabara@kingvapecr.com'},
      {type: 'title', content: 'SECCIÓN 7 – SISTEMA DE PUNTOS'},
      {type: 'text', content: 'Al realizar una orden ud puede ganar puntos en algunos productos. La cantidad de puntos varía según el producto. La cantidad de puntos a canjear es limitada a 45 puntos por orden. Algunos productos no se pueden comprar con puntos. Otras restricciones aplican.'},
      {type: 'title', content: 'SECCIÓN 8 – ENVÍOS'},
      {type: 'list', content: [
        'La orden de compra se procesa y alista para su envío o recolección durante las 24 horas después de la confirmación del pago de ésta, sin tomar en cuenta los sábados, domingos ni feriados. Los envíos se realizarán por medio del servicio de puerta a puerta de correos de Costa Rica. El envío será gratis a partir de 10,000 colones de compra.',
        'Los envíos serán recibidos dentro de la GAM con un plazo aproximado de 1 a 2 días laborables, y fuera de la GAM 1 a 4 días por los clientes a la dirección indicada en un plazo no mayor a 5 días hábiles, sin embargo, el tiempo de entrega depende de Correos de Costa Rica, en caso de que el cliente no estuviera presente en el momento de realizar la entrega se aplicarán las políticas de entrega de Correos de Costa Rica.',
        'El cliente debe brindar de manera específica en el momento de realizar su compra nombre completo, la dirección de entrega, su número de teléfono y correo electrónico, con el fin de realizar la entrega del pedido. La dirección de facturación y de entrega deben ser las mismas.',
        'También se puede optar por retirar en persona a nuestro local King Vape CR Cartago, en este caso no tendrá costo de envío. Los pedidos que sean para retirar en la tienda podrán ser retirados 24 horas después de la confirmación del pago del pedido, y dentro de un plazo máximo de 1 semana, en caso contrario, se procederá a la cancelación y terminación del pedido y no se realizará ningún tipo de reembolso, ni se aceptarán cambios ni reclamos.'
      ]},
      {type: 'title', content: 'SECCIÓN 9 – MÉTODO DE PAGO'},
      {type: 'text', content: 'La forma de pago puede hacerse por medio de deposito/transferencia bancaria o SINPE MÓVIL a cualquiera de nuestras cuentas del BAC CREDOMATIC o BANCO POPULAR, los datos de los clientes son confidenciales. No aceptamos tarjetas de credito o debito por el momento.'},
      {type: 'text', content: 'DETALLES BANCARIOS:'},
      {type: 'subtitle', content: 'Deposito/transferencia bancaria'},
      {type: 'wrappedText', content: ['BAC CREDOMATIC COLONES','Arafat Rafat Aref Bassam Sociedad Anónima (ARAB SA)','Cuenta Corriente: 943438291','Cuenta C.C: 10200009434382917','Cuenta IBAN: CR2601010200009434382917']},
      {type: 'wrappedText', content: ['BAC CREDOMATIC DÓLARES','Arafat Rafat Aref Bassam Sociedad Anónima (ARAB SA)','Cuenta Corriente: 943438283','Cuenta C.C: 10200009434382834','Cuenta IBAN: CR36010200009434382834']},
      {type: 'subtitle', content: 'SINPE Movil'},
      {type: 'wrappedText', content: ['BAC CREDOMATIC COLONES','Arafat Bassam Jabara Jebara','Cedula juridica: 3-101-784144','Cuenta IBAN: CR26010200009434382917','Celular +(506) 7252-7633']},
      {type: 'title', content: 'SECCIÓN 10 – IMPUESTOS'},
      {type: 'text', content: 'Todos los artículos que aparecen en la tienda incluyen el IVA correspondiente a Costa Rica.'},
      {type: 'title', content: 'SECCIÓN 11 – PRECISIÓN DE LA INFORMACIÓN DE FACTURACIÓN Y CUENTA'},
      {type: 'text', content: 'Nos reservamos el derecho de rechazar cualquier pedido que realice con nosotros. Podemos, a nuestro exclusivo criterio, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados por o bajo la misma cuenta de cliente, la misma tarjeta de crédito y / o pedidos que utilizan la misma dirección de facturación y / o envío. En el caso de que hagamos un cambio o cancelar un pedido, podemos intentar notificarlo contactando el correo electrónico y / o la dirección de facturación / número de teléfono proporcionado en el momento en que se realizó el pedido. Nos reservamos el derecho de limitar o prohibir pedidos que, a nuestro exclusivo criterio, parecen ser realizados por distribuidores, o revendedores.'},
      {type: 'text', content: 'Usted acepta proporcionar información de compra y cuenta actual, completa y precisa para todas las compras realizadas en nuestra tienda. Usted acepta actualizar rápidamente su cuenta y otra información, incluida su dirección de correo electrónico y números de tarjeta de crédito y fechas de vencimiento, para que podamos completar sus transacciones y contactarlo según sea necesario.'},
      {type: 'title', content: 'SECCIÓN 12 – HERRAMIENTAS OPCIONALES'},
      {type: 'text', content: 'Podemos proporcionarle acceso a herramientas de terceros sobre las cuales no supervisamos ni tenemos control ni aportes.'},
      {type: 'text', content: 'Usted reconoce y acepta que proporcionamos acceso a dichas herramientas “tal cual” y “según esté disponible” sin garantías, representaciones o condiciones de ningún tipo y sin ningún tipo de respaldo. No tendremos ninguna responsabilidad derivada o relacionada con su uso de herramientas de terceros opcionales.'},
      {type: 'text', content: 'Cualquier uso que usted haga de las herramientas opcionales ofrecidas a través del sitio es bajo su propio riesgo y discreción, y debe asegurarse de estar familiarizado y aprobar los términos en los que las herramientas son proporcionadas por los proveedores externos relevantes.'},
      {type: 'text', content: 'También podemos, en el futuro, ofrecer nuevos servicios y / o características a través del sitio web (incluido el lanzamiento de nuevas herramientas y recursos). Tales nuevas características y / o servicios también estarán sujetos a estos Términos de Servicio.'},
      {type: 'title', content: 'SECCIÓN 13 – ENLACES DE TERCEROS'},
      {type: 'text', content: 'Ciertos contenidos, productos y servicios disponibles a través de nuestro Servicio pueden incluir materiales de terceros. Los enlaces de terceros en este sitio pueden dirigirlo a sitios web de terceros que no están afiliados a nosotros.'},
      {type: 'text', content: 'No somos responsables de examinar o evaluar el contenido o la precisión y no garantizamos ni tendremos ninguna responsabilidad por los materiales o sitios web de terceros, ni por ningún otro material, producto o servicio de terceros.'},
      {type: 'text', content: 'No somos responsables de ningún daño o perjuicio relacionado con la compra o el uso de bienes, servicios, recursos, contenido o cualquier otra transacción realizada en relación con sitios web de terceros. Revise cuidadosamente las políticas y prácticas de terceros y asegúrese de comprenderlas antes de realizar cualquier transacción. Las quejas, reclamos, inquietudes o preguntas relacionadas con productos de terceros deben dirigirse a terceros.'},
      {type: 'title', content: 'SECCIÓN 14 – COMENTARIOS DEL USUARIO, COMENTARIOS Y OTRAS COMUNICACIONES'},
      {type: 'text', content: 'Si, a petición nuestra, usted envía ciertas presentaciones específicas (por ejemplo, participaciones en concursos) o sin una solicitud de nuestra parte, envía ideas creativas, sugerencias, propuestas, planes u otros materiales, ya sea en línea, por correo electrónico, por correo postal o de otra manera (colectivamente, “comentarios”), usted acepta que podemos, en cualquier momento, sin restricciones, editar, copiar, publicar, distribuir, traducir y de otra manera utilizar en cualquier medio cualquier comentario que nos envíe. No tenemos ni estaremos obligados (1) a mantener ningún comentario confidencial; (2) pagar una compensación por cualquier comentario; o (3) para responder a cualquier comentario.'},
      {type: 'text', content: 'Podemos, pero no tenemos la obligación de monitorear, editar o eliminar contenido que, a nuestro exclusivo criterio, determinemos que es ilegal, ofensivo, amenazante, calumniosa, difamatorio, pornográfico, obsceno u objetable o que viola la propiedad intelectual de cualquiera de las partes o estos Términos de servicio.'},
      {type: 'text', content: 'Usted acepta que sus comentarios no violará ningún derecho de terceros, incluidos los derechos de autor, marca registrada, privacidad, personalidad u otro derecho personal o de propiedad. Además, acepta que sus comentarios no contendrán material difamatorio o ilegal, abusivo u obsceno, ni contendrán virus informáticos u otro malware que pueda afectar de alguna manera el funcionamiento del Servicio o cualquier sitio web relacionado. No puede utilizar una dirección de correo electrónico falsa, pretender ser otra persona que no sea usted mismo o engañarnos a nosotros o a terceros en cuanto al origen de cualquier comentario. Usted es el único responsable de cualquier comentario que haga y de su precisión. No asumimos ninguna responsabilidad ni asumimos ninguna responsabilidad por los comentarios publicados por usted o cualquier tercero.'},
      {type: 'title', content: 'SECCIÓN 15 – INFORMACIÓN PERSONAL'},
      {type: 'text', content: 'Su envío de información personal a través de la tienda se rige por nuestra Política de Privacidad.'},
      {type: 'title', content: 'SECCIÓN 16 – ERRORES, INEXACTITUDES Y OMISIONES'},
      {type: 'text', content: 'Ocasionalmente puede haber información en nuestro sitio que contiene errores tipográficos, imprecisiones u omisiones que pueden estar relacionadas con descripciones de productos, precios, promociones, ofertas, cargos de envío de productos, tiempos de tránsito y disponibilidad. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, y de cambiar o actualizar información o cancelar pedidos si cualquier información en el sitio web relacionado es inexacta en cualquier momento sin previo aviso (incluso después de haber enviado su pedido).'},
      {type: 'text', content: 'No asumimos la obligación de actualizar, modificar o aclarar información en el sitio web relacionado, incluida, entre otras, información de precios, excepto según lo exija la ley. Ninguna fecha de actualización o actualización especificada aplicada en el sitio web relacionado, se debe tomar para indicar que toda la información en el sitio web relacionado se ha modificado o actualizado.'},
      {type: 'title', content: 'SECCIÓN 17 – USOS PROHIBIDOS'},
      {type: 'text', content: 'Además de otras prohibiciones establecidas en los Términos de servicio, tiene prohibido usar el sitio o su contenido: (a) para cualquier propósito ilegal; (b) solicitar a otros que realicen o participen en actos ilegales; (c) violar cualquier regulación, norma, ley u ordenanza local internacional, federal, provincial o estatal; (d) infringir o violar nuestros derechos de propiedad intelectual o los derechos de propiedad intelectual de terceros; (e) acosar, abusar, insultar, dañar, difamar, calumniar, menospreciar, intimidar o discriminar por motivos de género, orientación sexual, religión, origen étnico, raza, edad, origen nacional o discapacidad; (f) presentar información falsa o engañosa; (g) para cargar o transmitir virus o cualquier otro tipo de código malicioso que se utilizará o podrá utilizarse de cualquier manera que afecte la funcionalidad u operación del Servicio o de cualquier sitio web relacionado, otros sitios web o Internet; (h) para recopilar o rastrear la información personal de otros; (i) a spam, phishing, pharm, pretexto, araña, rastreo o raspado; (j) para cualquier propósito obsceno o inmoral; o (k) interferir o eludir las características de seguridad del Servicio o de cualquier sitio web relacionado, otros sitios web o Internet. Nos reservamos el derecho de terminar su uso del Servicio o cualquier sitio web relacionado por violar cualquiera de los usos prohibidos.'},
      {type: 'title', content: 'SECCIÓN 18 – DESCARGO DE RESPONSABILIDAD DE GARANTÍAS; LIMITACIÓN DE RESPONSABILIDAD'},
      {type: 'text', content: 'No garantizamos, ni representamos que su uso de nuestro servicio será ininterrumpido, oportuno, seguro o libre de errores.'},
      {type: 'text', content: 'No garantizamos que los resultados que se puedan obtener del uso del servicio sean precisos o confiables.'},
      {type: 'text', content: 'Usted acepta que de vez en cuando podemos eliminar el servicio por períodos indefinidos o cancelar el servicio en cualquier momento, sin previo aviso.'},
      {type: 'text', content: 'Usted acepta expresamente que el uso o la imposibilidad de usar el servicio es bajo su propio riesgo. El servicio y todos los productos y servicios entregados a usted a través del servicio se proporcionan (excepto según lo expresamente indicado por nosotros) “tal cual” y “según esté disponible” para su uso, sin ninguna representación, garantía o condición de ningún tipo, ya sea expresa o implícitas, incluidas todas las garantías implícitas o condiciones de comerciabilidad, calidad comercializable, idoneidad para un propósito particular, durabilidad, título y no infracción.'},
      {type: 'text', content: 'En ningún caso, King Vape, nuestros directores, funcionarios, empleados, afiliados, agentes, contratistas, pasantes, proveedores, proveedores de servicios o licenciantes serán responsables por cualquier lesión, pérdida, reclamo o cualquier tipo directo, indirecto, incidental, punitivo, especial, o daños consecuentes de cualquier tipo, que incluyen, entre otros, pérdida de ganancias, pérdida de ingresos, pérdida de ahorros, pérdida de datos, costos de reemplazo o cualquier daño similar, ya sea por contrato, agravio (incluida negligencia), responsabilidad estricta o de otro tipo, derivados de su uso de cualquiera de los servicios o productos adquiridos utilizando el servicio, o para cualquier otro reclamo relacionado de alguna manera con su uso del servicio o cualquier producto, incluidos, entre otros, cualquier error u omisión en cualquier contenido, o cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso del servicio o cualquier contenido (o producto) publicado, transmitido o puesto a disposición a través del servicio, incluso si se le informa de su posibilidad. Debido a que algunos estados o jurisdicciones no permiten la exclusión o la limitación de responsabilidad por daños consecuentes o incidentales, en dichos estados o jurisdicciones, nuestra responsabilidad se limitará en la medida máxima permitida por la ley.'},
      {type: 'title', content: 'SECCIÓN 19 – INDEMNIZACIÓN'},
      {type: 'text', content: 'Usted acepta indemnizar, defender y mantener indemne el NOMBRE DE LA TIENDA y nuestra matriz, subsidiarias, afiliadas, socios, funcionarios, directores, agentes, contratistas, otorgantes de licencias, proveedores de servicios, subcontratistas, proveedores, pasantes y empleados, indemnes de cualquier reclamo o demanda, incluidos honorarios razonables de abogados, realizados por cualquier tercero debido a su incumplimiento de estos Términos de servicio o los documentos que incorporan por referencia, o su violación de cualquier ley o los derechos de un tercero.'},
      {type: 'title', content: 'SECCIÓN 20 – SEPARABILIDAD'},
      {type: 'text', content: 'En el caso de que se determine que alguna disposición de estos Términos de servicio es ilegal, nula o inaplicable, dicha disposición será ejecutable en la mayor medida permitida por la ley aplicable, y la parte no ejecutable se considerará separada de estos Términos de Servicio, dicha determinación no afectará la validez y aplicabilidad de cualquier otra disposición restante.'},
      {type: 'title', content: 'SECCIÓN 21 – TERMINACIÓN'},
      {type: 'text', content: 'Las obligaciones y responsabilidades de las partes contraídas antes de la fecha de terminación sobrevivirán a la terminación de este acuerdo a todos los efectos.'},
      {type: 'text', content: 'Estos Términos de servicio son efectivos a menos que usted o nosotros los prescindamos. Puede rescindir estos Términos de servicio en cualquier momento notificandonos que ya no desea usar nuestros Servicios o cuando deja de usar nuestro sitio.'},
      {type: 'text', content: 'Si, a nuestro exclusivo criterio, usted no cumple o sospechamos que ha incumplido cualquier término o disposición de estos Términos de servicio, también podemos rescindir este acuerdo en cualquier momento sin previo aviso y usted seguirá siendo responsable de todos los montos adeudados hasta e incluyendo la fecha de terminación; y / o en consecuencia puede negarle el acceso a nuestros Servicios (o cualquier parte de los mismos).'},
      {type: 'title', content: 'SECCIÓN 22 – ACUERDO COMPLETO'},
      {type: 'text', content: 'El hecho de que no ejercitemos o hagamos cumplir cualquier derecho o disposición de estos Términos de servicio no constituirá una renuncia a dicho derecho o disposición.'},
      {type: 'text', content: 'Estos Términos de Servicio y cualquier política o regla operativa publicada por nosotros en este sitio o con respecto al Servicio constituye el acuerdo completo y el entendimiento entre usted y nosotros y rigen su uso del Servicio, reemplazando cualquier acuerdo, comunicación y propuesta previa o contemporánea. , ya sea oral o escrito, entre usted y nosotros (incluidas, entre otras, las versiones anteriores de los Términos de servicio).'},
      {type: 'text', content: 'Cualquier ambigüedad en la interpretación de estos Términos de servicio no se interpretará en contra de la parte redactora.'},
      {type: 'title', content: 'SECCIÓN 23 – LEY APLICABLE'},
      {type: 'text', content: 'Estos Términos de servicio y cualquier otro acuerdo por el cual le proporcionamos Servicios se regirán e interpretarán de conformidad con las leyes de Costa Rica.'},
      {type: 'title', content: 'SECCIÓN 24 – CAMBIOS A LOS TÉRMINOS DE SERVICIO'},
      {type: 'text', content: 'Puede revisar la versión más reciente de los Términos de servicio en cualquier momento en esta página.'},
      {type: 'text', content: 'Nos reservamos el derecho, a nuestro exclusivo criterio, de actualizar, cambiar o reemplazar cualquier parte de estos Términos de servicio mediante la publicación de actualizaciones y cambios en nuestro sitio web. Es su responsabilidad revisar periódicamente nuestro sitio web para ver los cambios. Su uso continuo o acceso a nuestro sitio web o al Servicio después de la publicación de cualquier cambio en estos Términos de servicio constituye la aceptación de dichos cambios.'},
      {type: 'title', content: 'SECCIÓN 25 – INFORMACIÓN DE CONTACTO'},
      {type: 'text', content: 'Las preguntas sobre los Términos de servicio deben enviarse al correo electrónico ajabara@kingvapecr.com'}
    ]
  }),

};
</script>
