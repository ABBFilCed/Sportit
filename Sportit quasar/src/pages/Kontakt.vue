<template>
  <q-page>
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />
    </q-card>
    <div class="row q-ma-xl q-gutter-xl">
      <div v-for="member in members" :key=member.id class="col">
        <q-card class="my-card" flat bordered style="">
          <q-img
            style="height:300px"
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
                {{member.description}}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
export default {
  components: {
    BottomInformation
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      members: [
        { id: 1, member: 'Filip Segerberg', job: 'VD', description: 'jabags', number: '123', email: 'email', image: require('../images/lillafille.png'), expanded: false },
        { id: 2, member: 'Filip Cederblad', job: 'Webbdesigner', description: 'jabags', number: '123', email: 'email', image: require('../images/FilleC.jpg'), expanded: false },
        { id: 3, member: 'Jenny Melkersson', job: 'Ekonom', description: 'jabags', number: '123', email: 'email', image: require('../images/jenny.png'), expanded: false }
      ]
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
