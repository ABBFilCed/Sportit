<template>
  <div class="q-pa-md q-gutter-sm q-ma-md" style="min-height:50px; max-height:500px;width: 500px; background-color:gainsboro;">
    <h4 class="text-center">Info</h4>
    <q-editor class="scroll overflow-hidden" style=" max-height:400px;" v-model="info" min-height="5rem"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: ''
    }
  }
}
</script>

<style>

</style>
