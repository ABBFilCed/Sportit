<template>
  <q-page>
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(item, index) in components" >
            <q-btn
              class="items-start q-pa-md q-gutter-md"
              :key="index" flat
              @click="item.show = !item.show"
              dense
              :icon=item.icon
              :icon-right="item.show ? 'remove' : 'add'"
              style="width:100%"
            >{{ item.label }}</q-btn>
            <q-separator :key="'sep' + index"  v-if="item.separator" />
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-btn flat @click="drawer = !drawer" round dense icon="menu" size="large" />
    <div class="row">
      <div style="background-color: dimgray; max-width:50%">
        <calendar-component v-show="components[0].show" />
      </div>
      <div style="">
        <opening-hours-component v-show="components[1].show "/>
      </div>
      <div style="">
        <info-component v-show="components[2].show" />
      </div>
    </div>
  </q-page>
</template>

<script>
import calendarComponent from '../components/calendarComponent.vue'
import openingHoursComponent from '../components/openingHoursComponent.vue'
import infoComponent from '../components/infoComponent.vue'
export default {
  components: {
    calendarComponent,
    openingHoursComponent,
    infoComponent
  },
  data () {
    return {
      expanded: false,
      drawer: false,
      components: [
        { id: 1, label: ' calendar', icon: 'calendar_today', separator: true, show: false },
        { id: 2, label: ' openingHours', icon: 'access_time', separator: true, show: false },
        { id: 3, label: ' info', icon: 'info', separator: true, show: false }
      ]
    }
  }
}
</script>

<style>

</style>
