<template>
  <div class="col q-py-md q-px-xl q-ma-md" style="max-height:500px; min-height: 50px; min-width:250px; background-color:gainsboro;">
    <h4 class="row justify-center">Öppettider</h4>
    <div class="row">
      <q-select class="col" v-model="dayOpen" :options="optionsDay" label="Dag" />
      <h3 class="col text-center"> - </h3>
      <q-select class="col" v-model="dayClose" :options="optionsDay" label="Dag" />
    </div>
    <div class="row">
      <q-input class="col" v-model="open" type="time"/>
      <h3 class="col text-center"> - </h3>
      <q-input class="col" v-model="close" type="time"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: '',
      close: '',
      dayOpen: null,
      dayClose: null,
      optionsDay: ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
    }
  }
}
</script>

<style>

</style>
