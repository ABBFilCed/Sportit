<template>
  <div style="background-color: white;" class="row">
    <div v-for="date in dateMaker" :key="date" class="col">
      <div v-for="time in timeMaker" :key="time" class="row">
        {{time}}
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
      const timeStamp = Date.now()
      let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
      const dateList = []
      for (let b = 0; b < 7; b++) {
        formattedString = date.addToDate(formattedString, { days: 1 })
        dateList.push(formattedString)
      }
      return dateList
    }
  }
}
</script>

<style>

</style>
