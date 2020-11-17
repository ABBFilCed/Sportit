<template>
  <div class="q-pa-md">

    <div class="q-gutter-md row items-end">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: '2019-02-22 21:02'
    }
  }
}
</script>
