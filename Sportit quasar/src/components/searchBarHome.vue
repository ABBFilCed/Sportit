<template>
  <div class="row justify-center q-pa-xl q-gutter-sm window-width" >
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
    <q-btn color="primary" label="Sök!" class="col-1" unelevated @click ="changeShow"/>
  </div>
</template>

<script>
const stringOptions = [
  'västerås', 'surahammar', 'södertälje', 'sundsvall', 'los angeles'
]
export default {
  data () {
    return {
      showResult: true,
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
          this.stadoptions = stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.stadoptions = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    changeShow () {
      this.$emit('switchState', this.showResult)
      const sendList = []
      if (this.search) {
        sendList.push({ name: 'search', value: this.search })
      }

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
