<template>
  <div class="row q-ma-md q-gutter-md justify-center">
    <div v-for="member in members" :key=member.id class="col-xs-11 col-sm-4 col-md-4 col-lg-3 col-xl-3">
      <q-card class="my-card" flat bordered style="">
        <q-img
          style="max-height:300px"
          :src='member.image'
        />

        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{member.member}}</div>
          <div class="text-caption text-grey">
            {{member.job}}
          </div>
        </q-card-section>

        <q-card-actions>

          <q-space />

          <q-btn
            color="grey"
            rounded
            flat
            dense
            style="width:100%"
            :icon=" member.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="member.expanded = !member.expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="member.expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              Tel.nummer: {{member.number}}<br><br>
              Email: {{member.email}}<br><br>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [
        { id: 1, member: 'Filip Segerberg', job: 'Verkställande Direktör', number: '072-866 03 93', email: 'filip.segerberg@sport-it.se', image: require('../images/lillafille.png'), expanded: false },
        { id: 2, member: 'Filip Cederblad', job: 'Webbdesigner', number: '073-610 93 73', email: 'filip.cederblad@sport-it.se', image: require('../images/FilleC.jpg'), expanded: false },
        { id: 3, member: 'Jenny Melkersson', job: 'Ekonom', number: '073-507 56 80', email: 'jenny.melkersson@sport-it.se', image: require('../images/jenny.png'), expanded: false }
      ]
    }
  }
}
</script>

<style>

</style>
