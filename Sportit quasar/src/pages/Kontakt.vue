<template>
  <q-page>
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="300"
      ><h1 class="text-center" style="color:white;">Kontakta oss</h1></q-parallax>
    </q-card>
    <div style="width:100%;">
      <div class="q-ma-xl q-pa-xl text-center">
        <p>{{info.info1}}</p><br><br>
        <p>Email: {{info.email}}</p><br>
        <p>Address: {{info.address}}</p>
      </div>
    </div>
    <div style="background-color:dodgerblue; color:white; width:100%" class="q-pa-lg">
      <h1 class="text-center">Vi på Sportit</h1>
      <contact-cards/>
    </div>
    <div style="width:100%;">
      <div class="q-mx-xl q-pa-xl text-center">
        <p>{{info.info2}}</p><br><br>
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
        info1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'info@sportit.se',
        info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        address: 'Robotvägen 4 Västerås'
      }
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
