<template>
  <div>
    <div>
      <WhatsappLogo />
    </div>
    <div>
      <Navbar/>
      <ImageWithTitle/>
      <br><br>
      <template v-for="paragraph in paragraphs">
        <br :key="paragraph">
        <div class="aboutLabelContainer" :key="paragraph">
          <p class="aboutLabel">{{paragraph.content}}</p>
        </div>
      </template>
      <br><br>
      <div class="aboutLabelContainer">
        <h1 class="aboutTitleLabel">HORARIO</h1>
      </div>
      <br>
      <div class="aboutLabelContainer" style="text-align: center;">
        <p class="aboutLabel">Lunes a Domingo de 10:00 AM a 7:00 PM</p>
      </div>
      <br>
      <div style="text-align: center;">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.170016823454!2d-84.05411718525843!3d9.919794392906208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3b54f76f97f%3A0xbae41feddaefbf91!2sKing%20Vape%20CR!5e0!3m2!1ses-419!2scr!4v1640707618467!5m2!1ses-419!2scr" class="aboutMap" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <br><br>
      <Footer/>
    </div>
  </div>
</template>


<style>
.aboutLabelContainer {
  position: relative;
  margin: 0 auto;
  max-width: 80vw;
  text-align: justify;
}

.aboutLabel {
  position: relative;
}

.aboutTitleLabel {
  text-align: center;
  position: relative;
  font-size: 3vw;
  font-family: titleFont;
}

.aboutMap {
  width: 60vw; 
  height: 300px; 
}

@font-face {
  font-family: titleFont;
  src: url("../assets/fonts/ethnocentric.ttf");
}
</style>


<script>
import WhatsappLogo from '../components/WhatsappLogo.vue'
import Navbar from '../components/Navbar.vue'
import ImageWithTitle from '../components/ImageWithTitle.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "About",

  components: {
    WhatsappLogo,
    ImageWithTitle,
    Navbar,
    Footer
  },

  data: () => ({
    paragraphs: [
      {content: 'Esta compañía ha pasado y está pasando por varias etapas de crecimiento y desarrollo. Inició en Diciembre del 2018, cuando yo estaba buscando la manera de dejar los cigarrillos convencionales por el gran daño que estaban causando a mi salud, allí fue donde me regalaron un vaporizador. Cuando comencé no tenía confianza suficiente en que lograría dejar tan gran vicio como lo es el fumado. Al pasar de el tiempo y empezar a utilizar el vaporizador, empecé a notar grandes cambios en mi. Mi olfato volvía a funcionar como lo hacía anteriormente, mi salud cambiaba para bien. Cuando todo comenzó a mejorar los repuestos y sabores que estaba utilizando se me empezaron a agotar, desde ese momento comencé una búsqueda por ellos por muchos días y no dí con lugares que me pudieran ayudar. Fue entonces donde descubrí que a muchas personas le sucedía lo mismo, en ese momento es donde decidí empezar a importarlos. Hasta el día de hoy yo junto con mi empresa nos esforzamos cada día por cumplir las expectativas y necesidades de cada uno de nuestros clientes. Nuestros valores y principios, son el ayudar a mejorar la salud de los demás con cada uno de nuestros productos.'},
      {content: 'Actualmente contamos con un personal altamente calificado para revisar la calidad de todos nuestros productos, con el fin que lleguen en excelente condiciones a sus manos. Cada unos de nuestros productos cuenta con su registro y declaración jurada, emitida por el Ministerio de Salud de Costa Rica, comprobando así la calidad de nuestros productos importados. Agradecemos a cada uno de ustedes por el apoyo incondicional. Gracias a ustedes crecemos cada día más y nos esforzamos en mejorar cada detalle que pueda satisfacer sus necesidades.'},
      {content: 'Arafat B. J. | fundador de KING VAPE CR'}
    ]
  }),

};
</script>
