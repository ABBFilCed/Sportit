<template>
  <q-page>
    <div style="margin-right: 25%; margin-left: 25%;">
      resultat
      <div v-for="club in clubs" :key=club.id class="col q-my-xl">
        <div class="row">
          <q-img src="../images/sportit-logga-clean-liten.png" class="col-2"/>
          <div class="col-2">

          </div>
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
