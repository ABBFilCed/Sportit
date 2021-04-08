<template>
  <q-page>
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />
    </q-card>
    <h1 class="row justify-center Teko">Kontakt</h1>
    <div style="background-color:dodgerblue; color:white; width:100%;">
      <div class="row justify-center">
        <h5 class="col-md-6 col-xs-11 text-center">{{info.info1}}</h5><br>
      </div>
      <h6 class="row justify-center">Email: {{info.email}}</h6>
      <h6 class="row q-pb-lg justify-center">Address: {{info.address}}</h6>
    </div>
    <h1 class="text-center">Vi på SportIT</h1>
    <contact-cards/>
    <div style="background-color:dodgerblue; color:white; width:100%;">
      <div class="row q-py-lg justify-center">
        <p class="col-md-6 col-xs-11 text-center">{{info.info2}}</p><br><br>
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
        info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        address: 'Robotvägen 4 Västerås'
      }
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>
.Teko {
  font-family: 'Teko-Light';
}

</style>
