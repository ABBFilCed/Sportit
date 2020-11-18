<template>
  <div class="col q-py-md q-px-xl q-ma-md" style="max-height:500px; min-height: 50px; min-width:300px; background-color:gainsboro;">
    <div style="margin-bottom:50px;">
      <h4 style="margin-bottom:0px;">Medlemsavgift!</h4>
      <a :href="infoLink">Mer information</a>
    </div>
    <q-btn size="large" class="q-pa-md" style="width:100%; background-color: dodgerblue; color:white;" flat>{{cost}} Sek</q-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cost: 1337,
      infoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  }
}
</script>

<style>

</style>
