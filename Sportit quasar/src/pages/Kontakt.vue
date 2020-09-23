<template>
  <q-page>
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />
    </q-card>
    <div class="text-center q-pa-xl" style="height:700px">Jag heter filip och har ett telefon nummer haj hej<br>Jegh heter jenny<br>Filip är mitt namn med<br><br>Vi använda social media ogha bogha</div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
export default {
  components: {
    BottomInformation
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
