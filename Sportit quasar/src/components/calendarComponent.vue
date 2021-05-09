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
        <q-btn flat  class="button" style="width:100%;" @click="book(date, time)">{{time}}</q-btn>
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
    <q-dialog v-model="occupied">
      <q-card>
        <q-card-section>
          <div class="text-h6">Denna tid är upptagen</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          försök med en annan tid istället
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Stäng" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { date } from 'quasar'
import { db } from '../boot/firebase'
export default {
  props: ['dataToCalendar'],
  data () {
    return {
      currentCalendar: [],
      allTimes: [],
      confirmBook: false,
      bookedTime: null,
      occupied: false
    }
  },
  methods: {
    book (date, time) {
      const booked = (date + time)
      let i
      for (i in this.dataToCalendar[3]) {
        console.log('for loop')
        console.log(this.dataToCalendar[3][i] + 'i')
        console.log(booked + 'booked')
        if (this.dataToCalendar[3][i] === booked) {
          this.occupied = true
          console.log('occupied')
        }
      }
      if (this.occupied === false) {
        console.log('falsk')
        this.confirmBook = true
        this.bookedTime = booked
      }
    },
    bookConfirm () {
      this.dataToCalendar[3].push(this.bookedTime)
      db.collection('Hallar')
        .doc(this.dataToCalendar[4])
        .update({ booked: this.dataToCalendar[3] })
      console.log(this.dataToCalendar[4])
    }
  },
  computed: {
    timeMaker: function () {
      console.log('hej')
      console.log(this.dataToCalendar)
      const fakeList = []
      let i = (this.dataToCalendar[1] - 1)
      console.log(i)
      while (i < this.dataToCalendar[2]) {
        console.log(i)
        console.log('sadsadmasomd')
        i += 1
        const currentDate = (i + ':00-' + (i + 1) + ':00')
        var currentDateString = currentDate.toString()
        console.log(currentDate)
        console.log(this.dataToCalendar[3])
        fakeList.push(currentDateString)
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
