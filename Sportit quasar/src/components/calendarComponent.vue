<template>
  <div class="col q-pa-lg " style="border-style:solid; border-width: 2px; border-color: dodgerblue;">
    <h5 class="row justify-center" style="margin-top:20px;">Boka tid</h5>
    <div class="row">
      <div v-for="day in days" :key=day.id class="col text-center">
      {{day.day}}
      <div v-for="(time, index) in day.times" :key="`time-${index}`">
          <q-btn flat  class="button" style="width:100%;">{{time}}</q-btn>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      days: [
        { id: 1, day: 'monday', times: ['10-11', '11-12', '12-13'] },
        { id: 2, day: 'tuesday', times: ['10-11', '11-12', '12-13'] },
        { id: 3, day: 'wednesday', times: ['10-11', '11-12', '12-13'] },
        { id: 1, day: 'thursday', times: ['10-11', '11-12', '12-13'] },
        { id: 2, day: 'friday', times: ['10-11', '11-12', '12-13'] },
        { id: 3, day: 'saturday', times: ['10-11', '11-12', '12-13'] }
      ]
    }
  }
}
</script>

<style>
 .button:hover{
   color:green;
 }
</style>
