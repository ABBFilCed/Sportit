<template>
  <q-page class="Helvetica">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />
    </q-card>
    <h2 class="row justify-center">Kontakt</h2>
    <div style="background-color:dodgerblue; color:white; width:100%;">
      <div class="row justify-center">
        <h5 class="col-md-6 col-xs-11 text-center">{{info.info1}}</h5><br>
      </div>
      <h6 class="row justify-center">Email: {{info.email}}</h6>
      <h6 class="row q-pb-lg justify-center">Address: {{info.address}}</h6>
    </div>
    <h2 class="text-center Teko">Vi på SportIT</h2>
    <contact-cards/>
    <div style="background-color:dodgerblue; color:white; width:100%;">
      <div class="row q-py-lg justify-center">
        <p class="col-md-6 col-xs-11 text-center">{{info.info2}}</p><br><br>
        <p class="col-md-7 col-xs-11 text-center"><q-btn flat no-caps style="margin-bottom: 2px;" :ripple="false" color="dodgerblue" text-color="white" label="SportIT Förbättringsmöjligheter" /></p>
      </div>
    </div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
import contactCards from '../components/contactCards.vue'
export default {
  components: {
    BottomInformation,
    contactCards
  },
  data () {
    return {
      info: {
        info1: 'Vi på SportIT svarar gärna på era frågor och funderingar, det går bra att höra av sig på antingen mail eller telefon.',
        email: 'info@sport-it.se',
        info2: 'Vi älskar feedback, svara gärna på enkätet nedan för att hjälpa oss att börbättra vår tjänst!',
        info3: 'SportIT Förbättringsmöjligheter',
        address: 'Robotvägen 4 Västerås'
      }
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>

.Helvetica {
  font-family: 'Trebuchet MS';
}
</style>
