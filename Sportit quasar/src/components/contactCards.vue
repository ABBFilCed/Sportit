<template >
  <div class="row q-ma-xl q-gutter-xl" >
    <div v-for="member in members" :key=member.id class="col">
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
</template>

<script>
export default {
  data () {
    return {
      members: [
        { id: 1, member: 'Filip Segerberg', job: 'VD', description: 'jabags', number: '123 567 67 67', email: 'Filip.Segerberg@SportIT.se', image: require('../images/lillafille.png'), expanded: false },
        { id: 2, member: 'Filip Cederblad', job: 'Webbdesigner', description: 'jabags', number: '123 873 60 01', email: 'Filip.Cederblad@SportIT.se', image: require('../images/FilleC.jpg'), expanded: false },
        { id: 3, member: 'Jenny Melkersson', job: 'Ekonom', description: 'jabags', number: '123 679 89 08', email: 'Jenny.Melkersson@SportIT.se', image: require('../images/jenny.png'), expanded: false }
      ]
    }
  }
}
</script>

<style>

</style>
