<template>
  <q-page>
    <div class="row justify-center q-ma-xl">
      <p>searchbar</p>
    </div>
    <div class="row justify-center q-my-xl">
      <div class="col-md-7 col-sm-12" style="border-left-style: solid; border-right-style: solid; border-width: 2px; border-color: gainsboro;">
        <div v-for="club in clubs" :key=club.id class="row q-py-lg q-mx-xl" style="border-bottom-style: solid; border-width: 2px; border-color: gainsboro;">
          <q-btn style="width:100%;" unelevated class="q-pa-sm">
            <q-img src="../images/sportit-logga-clean-liten.png" width="150px" height="150px" class="col-3"/>
            <div class="col q-pl-lg q-pt-lg">
              <p class="row" style="font-size: 30px;">{{club.name}}</p>
              <p class="row">{{club.adress}}</p>
            </div>
          </q-btn>
        </div>
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
      clubs: [
        { id: 0, icon: 'fas fa-phone', name: 'Sura padel', adress: 'köpmangatan 45' },
        { id: 1, icon: 'fas fa-image', name: 'tennishallen', adress: 'kebbenikaise 7' },
        { id: 2, icon: 'fas fa-users', name: 'västerås bowlingmasters', adress: 'Åmänningevägen 21' }
      ]
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
