<template>
  <q-page>
    <div style="background-color: gainsboro; height: 100px"></div>
    <div class="text-center q-pa-xl" style="height:700px">Anläggningar</div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
export default {
  components: {
    BottomInformation
  }
}
</script>

<style>

</style>
