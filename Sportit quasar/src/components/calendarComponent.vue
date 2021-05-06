<template>
  <div style="background-color: white;" >
    <q-bar>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <div class="col q-pa-lg ">
    <h5 class="row justify-center" style="margin-top:20px;">Boka tid</h5>
    <div class="row">
      <div v-for="date in dateMaker" :key="date" class="col text-center">
        <h6>{{date}}</h6>
      <div v-for="time in timeMaker" :key="time">
          <q-btn flat  class="button" style="width:100%;">{{time}}</q-btn>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  props: ['dataToCalendar'],
  data () {
    return {
      currentCalendar: [],
      allTimes: []
    }
  },
  methods: {
  },
  computed: {
    timeMaker: function () {
      console.log('hej')
      console.log(this.dataToCalendar)
      const fakeList = []
      let i = this.dataToCalendar[1]
      console.log(i)

      while (i < this.dataToCalendar[2]) {
        console.log(i)
        console.log('sadsadmasomd')
        i += 1
        fakeList.push(i + ':00-' + (i + 1) + ':00')
      }
      return fakeList
    },
    dateMaker: function () {
      let timeStamp = Date.now()
      const dateList = []
      for (let b = 0; b < 7; b++) {
        timeStamp = date.addToDate(timeStamp, { days: 1 })
        const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
        dateList.push(formattedString)
      }
      return dateList
    }
  }
}
</script>

<style>
  .button:hover{
    color:green;
  }
</style>
