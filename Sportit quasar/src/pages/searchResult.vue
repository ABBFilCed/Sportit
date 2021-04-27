<template>
  <q-page>
    <search-bar @sendData = "recieveData($event)"/>
    <div class="row justify-center q-my-xl">
      <div class="col-md-7 col-sm-12" style="">
        <div v-for="hall in searchResult" :key=hall.id class="row q-pa-lg" style="border-bottom-style: solid; border-width: 2px; border-color: gainsboro;">
          <q-btn style="width:100%;" unelevated class="q-pa-sm">
            <q-img src="../images/sportit-logga-clean-liten.png" width="150px" height="150px" class="col-3"/>
            <div class="col q-pl-lg q-pt-lg">
              <p class="row" style="font-size: 30px;">{{hall.name}}</p>
              <p class="row">{{hall.adress}}</p>
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
import searchBar from '../components/searchBar.vue'
import { db } from '../boot/firebase.js'

export default {
  components: {
    BottomInformation,
    searchBar
  },
  props: ['searchResultHome'],
  data () {
    return {
      searchData: [],
      clubs: [
        { id: 0, icon: 'fas fa-phone', name: 'Sura padel', adress: 'köpmangatan 45' },
        { id: 1, icon: 'fas fa-image', name: 'tennishallen', adress: 'kebbenikaise 7' },
        { id: 2, icon: 'fas fa-users', name: 'västerås bowlingmasters', adress: 'Åmänningevägen 21' }
      ],
      hallar: [],
      searchResult: [],
      filterResult: []
    }
  },
  methods: {
    recieveData (e) {
      this.searchData = e
      console.log(this.searchData)
      console.log(this.hallar)
    }
  },
  watch: {
    searchResultHome: function () {
      this.searchData = this.searchResultHome
    },
    searchData: function () {
      let search = db.collection('Hallar')

      if (this.searchData[1] != null) {
        search = search.where('sport', '==', this.searchData[1])
      }

      if (this.searchData[2] != null) {
        search = search.where('stad', '==', this.searchData[2])
      }

      this.$bind('filterResult', search)
      console.log(this.filterResult)
    }
  },
  firestore: {
    // hallar: db.collection('Hallar')
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
