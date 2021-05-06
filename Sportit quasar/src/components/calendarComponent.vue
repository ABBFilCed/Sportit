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
        <q-btn flat  class="button" style="width:100%;" @click="book(time)">{{time}}</q-btn>
      </div>
      </div>
    </div>
    </div>
    <q-dialog v-model="confirmBook">
      <q-card>
        <q-card-section>
          <div class="text-h6">Grattis</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Du håller på att boka tiden {{bookedTime}} i {{dataToCalendar[0]}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Avbryt" color="primary" v-close-popup />
          <q-btn flat label="Acceptera" color="primary" v-close-popup @click="bookConfirm()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  props: ['dataToCalendar'],
  data () {
    return {
      currentCalendar: [],
      allTimes: [],
      confirmBook: false,
      bookedTime: null
    }
  },
  methods: {
    book (e) {
      this.confirmBook = true
      this.bookedTime = e
    },
    bookConfirm () {
      console.log('bokat')
      window.location.reload()
    }
  },
  computed: {
    timeMaker: function () {
      console.log('hej')
      console.log(this.dataToCalendar)
      const fakeList = []
      let i = this.dataToCalendar[1]
      console.log(i)
      let a
      while (i < this.dataToCalendar[2]) {
        console.log(i)
        console.log('sadsadmasomd')
        i += 1
        const currentDate = (i + ':00-' + (i + 1) + ':00')
        var currentDateString = currentDate.toString()
        console.log(currentDate)
        console.log(this.dataToCalendar[3])
        for (a in this.dataToCalendar[3]) {
          console.log('hejhejhje')
          console.log(a)
          if (this.dataToCalendar[3][a] !== currentDateString) {
            console.log('funkadåe')
            fakeList.push(currentDateString)
          }
        }
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
