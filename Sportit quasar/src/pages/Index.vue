<template>
  <q-page class="">
      <q-parallax class="window-height" speed="0.5">
        <template v-slot:media>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">
        </template>

        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.80 + (1 - scope.percentScrolled) *0.55,
              top: ((scope.percentScrolled * 75)-5) + '%',
              left: 0,
              right: 0
            }"
          >
            <search-bar-home/>
          </div>
        </template>
      </q-parallax>
    <div>
      <div class="q-mb-xl column" style="margin-left: 10%; margin-right:40%">
        <h2 class="fade-in">{{info.title1}}</h2>
        <h4 class="fade-in-subtitle">{{info.subtitle1}}</h4>
        <p class="fade-in">{{info.info1}}</p>
      </div>
      <div style="margin-left: 40%; margin-right:10%; text-align:left;" class="q-mt-xl">
        <h2 class="fade-in" style="margin-left:60%; width: 40%;">{{info.title1}}</h2>
        <h4 class="fade-in-subtitle" style="margin-left:75%; width: 20%;">{{info.subtitle1}}</h4>
        <p class="fade-in">{{info.info1}}</p>
      </div>
    </div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
import searchBarHome from '../components/searchBarHome.vue'
import { db } from '../boot/firebase.js'

export default {
  name: 'PageIndex',
  components: {
    BottomInformation,
    searchBarHome
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    },
    isElemVisible (el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top + 120 // 200 = buffer
      var elemBottom = rect.bottom - 100
      return elemTop < window.innerHeight && elemBottom >= 0
    },
    handlescrollfade (evt) {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
        }
      }
      for (var b = 0; b < this.fadeOutElements.length; b++) {
        var element = this.fadeOutElements[b]
        if (!(this.isElemVisible(element))) {
          element.style.opacity = '0'
          element.style.transform = 'scale(1)'
        }
      }
    },
    handlescrolltitle (evt) {
      for (var i = 0; i < this.fadeInTitle.length; i++) {
        var elem = this.fadeInTitle[i]
        if (this.isElemVisible(elem)) {
          elem.style.transform = 'scaleX(1)'
        }
      }
      for (var b = 0; b < this.fadeOutTitle.length; b++) {
        var element = this.fadeOutTitle[b]
        if (!(this.isElemVisible(element))) {
          element.style.transform = 'scaleX(0)'
          element.style.transitiondelay = '0.5s'
        }
      }
    },
    handlescrollsubtitle (evt) {
      for (var i = 0; i < this.fadeInSubTitle.length; i++) {
        var elem = this.fadeInSubTitle[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
        }
      }
      for (var b = 0; b < this.fadeOutSubTitle.length; b++) {
        var element = this.fadeOutSubTitle[b]
        if (!(this.isElemVisible(element))) {
          element.style.opacity = '0'
          element.style.transform = 'scale(1)'
        }
      }
    }
  },
  mounted () {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    this.fadeOutElements = Array.from(document.getElementsByClassName('fade-in'))
    this.fadeInTitle = Array.from(document.getElementsByClassName('fade-in-title'))
    this.fadeOutTitle = Array.from(document.getElementsByClassName('fade-in-title'))
    this.fadeInSubTitle = Array.from(document.getElementsByClassName('fade-in-subtitle'))
    this.fadeOutSubTitle = Array.from(document.getElementsByClassName('fade-in-subtitle'))
    document.addEventListener('scroll', this.handlescrollfade)
    document.addEventListener('scroll', this.handlescrolltitle)
    document.addEventListener('scroll', this.handlescrollsubtitle)
    this.handlescrollfade()
    this.handlescrolltitle()
    this.handlescrollsubtitle()
  },
  unmounted () {
    document.removeEventListener('scroll', this.handlescrollfade)
    document.removeEventListener('scroll', this.handlescrolltitle)
    document.removeEventListener('scroll', this.handlescrollsubtitle)
  },
  data () {
    return {
      loading1: false,
      date: '2019/02/01',
      model: null,
      options: [
        'Tennis', 'Gold', 'Prinskorv', 'Penis', 'KastMedLitenApa'
      ],
      info: {
        title1: 'Title of text',
        subtitle1: 'Subtitle',
        info1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  },
  firestore: {
    aktiv: db.collection('sporter')
  }
}// importerat bottominformationcomponenten
</script>

<style>
.fade-in{
  opacity:0;
  transition: 0.5s;
  transform: scale(0.8);
}
.fade-in-title{
  position: relative;
  font-size: 3em;
  transition: 0.5s;
  transform-origin: left;
  transform: scaleX(0);
}
.fade-in-title::before{
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: dodgerblue;
  transform-origin: right;
  transition: 0.5s;
}
.fade-in-subtitle{
  opacity:0;
  transition: 0.5s;
  transform: scale(0.8);
}
</style>
