<template>
  <q-page>
    <searchBar @sportValues="findSports ($event)"></searchBar>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import searchBar from '../components/searchBar.vue'
import BottomInformation from '../components/BottomInformation.vue'
export default {
  components: {
    searchBar,
    BottomInformation
  },
  data () {
    return {
      filterdSport: []
    }
  },
  methods: {
    findSports (e) {
      console.log('testing funkton')
      this.filterdSport = e
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
