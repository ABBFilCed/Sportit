<template>
  <div>
      {{ dataToCalendar }}
      {{ timeMaker }}
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
      const timeStamp = Date.now()
      let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
      console.log(i)

      while (i < this.dataToCalendar[2]) {
        console.log(i)
        console.log('sadsadmasomd')
        i += 1
        for (let b = 0; b < 7; b++) {
          formattedString = date.addToDate(formattedString, { days: 1 })
          fakeList.push([formattedString, i + ':00-' + (i + 1) + ':00'])
        }
      }
      return fakeList
    }
  }
}
</script>

<style>

</style>
