<template>
  <q-page>
    <search-bar @sendData="recieveData" />
    <div class="row justify-center q-my-xl">
      <div class="col-md-7 col-sm-12" style="">
        <div
          v-for="item in filterResult"
          :key="item.id"
          class="row q-pa-lg"
          style="border-bottom-style: solid; border-width: 2px; border-color: gainsboro;"
        >
          <q-btn style="width:100%;" unelevated class="q-pa-sm">
            <q-img
              src="../images/sportit-logga-clean-liten.png"
              width="150px"
              height="150px"
              class="col-3"
            />
            <div class="col q-pl-lg q-pt-lg">
              <p class="row" style="font-size: 30px;">{{ item.name }}</p>
              <p class="row">{{ item.adress }}</p>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import searchBar from '../components/searchBar.vue'
import { db } from '../boot/firebase.js'

export default {
  components: {
    searchBar
  },
  props: ['searchResultHome'],
  data () {
    return {
      searchData: [],
      clubs: [
        {
          id: 0,
          icon: 'fas fa-phone',
          name: 'Sura padel',
          adress: 'köpmangatan 45'
        },
        {
          id: 1,
          icon: 'fas fa-image',
          name: 'tennishallen',
          adress: 'kebbenikaise 7'
        },
        {
          id: 2,
          icon: 'fas fa-users',
          name: 'västerås bowlingmasters',
          adress: 'Åmänningevägen 21'
        }
      ],
      hallar: [],
      searchResult: [],
      filterResult: [],
      dbVariables: ['adress', 'name', 'sport', 'stad']
    }
  },
  methods: {
    recieveData (data) {
      let search = db.collection('Hallar')
      console.log(search)
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === 'search') {
          search = search.where('name', '==', data[i].value)
          // for (const a in this.dbVariables) {
          //   console.log(this.dbVariables[a])
          //   search = search.where(this.dbVariables[a], '==', data[i].value)
          // } funkar inte
        }
        if (data[i].name === 'sport') {
          search = search.where('sport', '==', data[i].value)
        }

        if (data[i].name === 'stad') {
          search = search.where('stad', '==', data[i].value)
        }
      }

      this.$bind('filterResult', search).then(res => {
        console.log(res)
      })
    }
  },
  watch: {
    searchResultHome: function () {
      console.log(this.searchResultHome)
      let search = db.collection('Hallar')
      const data = this.searchResultHome

      for (let i = 0; i < data.length; i++) {
        if (data[i].name === 'search') {
          search = search.where('name', '==', data[i].value)
        }
        if (data[i].name === 'sport') {
          search = search.where('sport', '==', data[i].value)
        }

        if (data[i].name === 'stad') {
          search = search.where('stad', '==', data[i].value)
        }
      }

      this.$bind('filterResult', search).then(res => {
        console.log(res)
      })
    }
    // searchData: function () {
    //   let search = db.collection('Hallar')

    //   if (this.searchData[1] != null) {
    //     search = search.where('sport', '==', this.searchData[1])
    //   }

    //   if (this.searchData[2] != null) {
    //     search = search.where('stad', '==', this.searchData[2])
    //   }

    //   this.$bind('filterResult', search)
    //   console.log(this.filterResult)
    // }
  }
} // importerat bottominformationcomponenten
</script>

<style></style>
