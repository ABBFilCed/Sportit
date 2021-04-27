<template>
  <div class="row justify-center q-pa-xl q-gutter-sm" style="background-color:gainsboro;">
    <q-input class="col-2" outlined bg-color="white" v-model="search" label="Hitta anläggning" />
    <q-select
      class="col-2"
      bg-color="white"
      outlined
      v-model="stadmodel"
      use-input
      input-debounce="0"
      label="Stad"
      :options="stadoptions"
      @filter="filterFn"
      behavior="menu"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            No results
          </q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-select outlined bg-color="white" v-model="sportmodel" :options="sportoptions" label="Sport" class="col-2"/>
    <q-btn color="primary" label="Sök!" class="col-1" unelevated @click ="sendSearchData"/>
  </div>
</template>

<script>
const stringOptions = [
  'västerås', 'surahammar', 'södertälje', 'sundsvall', 'los angeles'
]
export default {
  data () {
    return {
      search: null,
      stadmodel: null,
      stringOptions,
      stadoptions: stringOptions,
      sportmodel: null,
      sportoptions: [
        'padel', 'tennis', 'pingis', 'badminton'
      ]
    }
  },
  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    sendSearchData () {
      const sendList = []

      if (this.stadmodel) {
        sendList.push({ name: 'stad', value: this.stadmodel })
      }

      if (this.sportmodel) {
        sendList.push({ name: 'sport', value: this.sportmodel })
      }

      this.$emit('sendData', sendList)
    }
  }
}
</script>

<style>

</style>
