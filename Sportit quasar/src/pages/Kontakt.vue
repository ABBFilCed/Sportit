<template>
  <q-page>
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="300"
      ><h1 class="text-center" style="color:white;">Kontakta oss</h1></q-parallax>
    </q-card>
    <div style="width:100%;">
      <div class="q-ma-xl q-pa-xl text-center info col">
        <p style="margin-bottom:100px">{{info.info1}}</p>
        <div class=" row q-pa-xl" style="width:100%; background-color:gainsboro;border-radius: 20px;">
          <p class="col">Email: {{info.email}}</p>
          <p class="col">Address: {{info.address}}</p>
        </div>
        <p style="margin-top:100px">{{info.info1}}</p>
      </div>
    </div>
    <div style="width:100%;">
      <div class="q-mx-xl q-pa-xl text-center info">
        <p>{{info.info2}}</p><br><br>
      </div>
    </div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
export default {
  components: {
    BottomInformation
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
  .info{
    font-size: 20px;
  }
</style>
