<template >
  <q-parallax
    src="https://cdn.quasar.dev/img/parallax1.jpg"
    :height="700"
  >
    <div style="color:white" class="container">
      <h1 class="fade-in text-center">Vi på SportIT</h1>
        <div class="row q-ma-xl q-gutter-xl" >
          <div v-for="member in members" :key=member.id class="col fade-in">
            <q-img
              style="max-height:300px; border-radius: 300px; max-width:300px;"
              :src='member.image'
            />
            <h3>{{member.member}}</h3>
            <p>{{member.job}}</p>
            <p>Telefon: {{member.number}}</p>
            <p>E-mail: {{member.email}}</p>
            <p>{{member.description}}</p>
          </div>
        </div>
    </div>
  </q-parallax>
</template>

<script>
export default {
  data () {
    return {
      members: [
        { id: 1, member: 'Filip Segerberg', job: 'VD', description: 'jabags', number: '123 567 67 67', email: 'Filip.Segerberg@SportIT.se', image: require('../images/lillafille.png'), expanded: false },
        { id: 2, member: 'Filip Cederblad', job: 'Webbdesigner', description: 'jabags', number: '123 873 60 01', email: 'Filip.Cederblad@SportIT.se', image: require('../images/FilleC.jpg'), expanded: false },
        { id: 3, member: 'Jenny Melkersson', job: 'Ekonom', description: 'jabags', number: '123 679 89 08', email: 'Jenny.Melkersson@SportIT.se', image: require('../images/jenny.png'), expanded: false }
      ],
      fadeInElements: [],
      fadeOutElements: []
    }
  },
  methods: {
    isElemVisible (el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top + 200 // 200 = buffer
      var elemBottom = rect.bottom + 200
      return elemTop < window.innerHeight && elemBottom >= 0
    },
    handleScroll (evt) {
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
    }
  },
  mounted () {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    this.fadeOutElements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  unmounted () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.fade-in{
  opacity:0;
  transition: 4s;
  transform: scale(0.8);
}
</style>
